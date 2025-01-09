import HamburgerMenuMetadata from "../metadata/icons/HamburgerMenuIcon.json";
import ArrowRightMetadata from "../metadata/icons/ArrowRightIcon.json";
import ColorWheelMetadata from "../metadata/icons/ColorWheelIcon.json";
import TextAlignLeftMetadata from "../metadata/icons/TextAlignLeftIcon.json";
import PlayMetadata from "../metadata/icons/PlayIcon.json";
import GlobeMetadata from "../metadata/icons/GlobeIcon.json";
import BookmarkFilledMetadata from "../metadata/icons/BookmarkFilledIcon.json";
import LightningBoltMetadata from "../metadata/icons/LightningBoltIcon.json";
import MagicWandMetadata from "../metadata/icons/MagicWandIcon.json";
import BoxModelMetadata from "../metadata/icons/BoxModelIcon.json";
import GitHubLogoMetadata from "../metadata/icons/GitHubLogoIcon.json";
import AccessibilityMetadata from "../metadata/icons/AccessibilityIcon.json";
import ActivityLogMetadata from "../metadata/icons/ActivityLogIcon.json";
import AlignBaselineMetadata from "../metadata/icons/AlignBaselineIcon.json";
import AlignBottomMetadata from "../metadata/icons/AlignBottomIcon.json";
import AlignCenterHorizontallyMetadata from "../metadata/icons/AlignCenterHorizontallyIcon.json";
import AlignCenterVerticallyMetadata from "../metadata/icons/AlignCenterVerticallyIcon.json";
import AlignLeftMetadata from "../metadata/icons/AlignLeftIcon.json";
import AlignRightMetadata from "../metadata/icons/AlignRightIcon.json";
import AlignTopMetadata from "../metadata/icons/AlignTopIcon.json";
import AllSidesMetadata from "../metadata/icons/AllSidesIcon.json";
import AngleMetadata from "../metadata/icons/AngleIcon.json";
import ArchiveMetadata from "../metadata/icons/ArchiveIcon.json";
import ArrowBottomLeftMetadata from "../metadata/icons/ArrowBottomLeftIcon.json";
import ArrowBottomRightMetadata from "../metadata/icons/ArrowBottomRightIcon.json";
import ArrowDownMetadata from "../metadata/icons/ArrowDownIcon.json";
import ArrowLeftMetadata from "../metadata/icons/ArrowLeftIcon.json";
import ArrowTopLeftMetadata from "../metadata/icons/ArrowTopLeftIcon.json";
import ArrowTopRightMetadata from "../metadata/icons/ArrowTopRightIcon.json";
import ArrowUpMetadata from "../metadata/icons/ArrowUpIcon.json";
import AspectRatioMetadata from "../metadata/icons/AspectRatioIcon.json";
import AvatarMetadata from "../metadata/icons/AvatarIcon.json";
import BackpackMetadata from "../metadata/icons/BackpackIcon.json";
import BadgeMetadata from "../metadata/icons/BadgeIcon.json";
import BarChartMetadata from "../metadata/icons/BarChartIcon.json";
import BellMetadata from "../metadata/icons/BellIcon.json";

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
  AccessibilityIcon: AccessibilityMetadata,
  ActivityLogIcon: ActivityLogMetadata,
  AlignBaselineIcon: AlignBaselineMetadata,
  AlignBottomIcon: AlignBottomMetadata,
  AlignCenterHorizontallyIcon: AlignCenterHorizontallyMetadata,
  AlignCenterVerticallyIcon: AlignCenterVerticallyMetadata,
  AlignLeftIcon: AlignLeftMetadata,
  AlignRightIcon: AlignRightMetadata,
  AlignTopIcon: AlignTopMetadata,
  AllSidesIcon: AllSidesMetadata,
  AngleIcon: AngleMetadata,
  ArchiveIcon: ArchiveMetadata,
  ArrowBottomLeftIcon: ArrowBottomLeftMetadata,
  ArrowBottomRightIcon: ArrowBottomRightMetadata,
  ArrowDownIcon: ArrowDownMetadata,
  ArrowLeftIcon: ArrowLeftMetadata,
  ArrowRightIcon: ArrowRightMetadata,
  ArrowTopLeftIcon: ArrowTopLeftMetadata,
  ArrowTopRightIcon: ArrowTopRightMetadata,
  ArrowUpIcon: ArrowUpMetadata,
  AspectRatioIcon: AspectRatioMetadata,
  AvatarIcon: AvatarMetadata,
  BackpackIcon: BackpackMetadata,
  BadgeIcon: BadgeMetadata,
  BarChartIcon: BarChartMetadata,
  BellIcon: BellMetadata,
  BookmarkFilledIcon: BookmarkFilledMetadata,
  BoxModelIcon: BoxModelMetadata,
  ColorWheelIcon: ColorWheelMetadata,
  GitHubLogoIcon: GitHubLogoMetadata,
  GlobeIcon: GlobeMetadata,
  HamburgerMenuIcon: HamburgerMenuMetadata,
  LightningBoltIcon: LightningBoltMetadata,
  MagicWandIcon: MagicWandMetadata,
  PlayIcon: PlayMetadata,
  TextAlignLeftIcon: TextAlignLeftMetadata,
} as const;

export type IconName = keyof typeof metadata;
