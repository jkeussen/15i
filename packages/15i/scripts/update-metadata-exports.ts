import fs from "fs";
import path from "path";

async function updateMetadataExports() {
  const metadataDir = path.join(process.cwd(), "metadata", "icons");
  const metadataFiles = fs
    .readdirSync(metadataDir)
    .filter((file) => file.endsWith(".json"))
    .sort(); // Sort alphabetically

  // Generate import statements
  const imports = metadataFiles
    .map((file) => {
      const componentName = file.replace(".json", "");
      return `import ${componentName}Metadata from "../metadata/icons/${file}";`;
    })
    .join("\n");

  // Generate metadata object entries
  const metadataEntries = metadataFiles
    .map((file) => {
      const componentName = file.replace(".json", "");
      return `  ${componentName}: ${componentName}Metadata,`;
    })
    .join("\n");

  // Generate the complete metadata.ts content
  const content = `${imports}

export type IconCategory =
  | "interface"
  | "arrows"
  | "media"
  | "shapes"
  | "editor"
  | "social"
  | "development"
  | "layout"
  | "navigation"
  | "communication"
  | "status";

export interface IconContributor {
  name: string;
  github?: string;
}

export interface IconMetadata {
  fileName: string;
  name: string;
  tags: string[];
  categories: IconCategory[];
  contributors?: IconContributor[];
  keywords?: string[];
}

export const metadata = {
${metadataEntries}
} as const;

export type IconName = keyof typeof metadata;
`;

  // Write the file
  const outputPath = path.join(process.cwd(), "src", "metadata.ts");
  fs.writeFileSync(outputPath, content, "utf8");
  console.log("Updated metadata.ts with all metadata files");
}

updateMetadataExports().catch(console.error);
