export interface VideoFile {
  id: string;
  name: string;
  file: File;
  fileUrl: string;
  dateAdded: Date;
  firstPlayDate?: Date;
  reviewCount: number;
  nextReviewDate?: Date;
  status: 'new' | 'learning' | 'completed';
  collectionId: string; // 所属合辑ID
  episodeNumber?: number; // 集数
  thumbnail?: string; // 缩略图URL (可选)
  duration?: number; // 视频时长(秒)
  fileSize?: number; // 文件大小(字节)
  mimeType?: string; // MIME类型
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  dateCreated: Date;
  isActive: boolean; // 是否参与学习计划生成
  totalVideos: number;
  completedVideos: number;
  color: string; // 合辑颜色标识
}

export interface PlaylistItem {
  videoId: string;
  reviewType: 'new' | 'review';
  reviewNumber: number;
  daysSinceFirstPlay?: number;
  isRecommendedForVideo?: boolean;
}

export interface DailyPlaylist {
  id: string;
  date: Date;
  items: PlaylistItem[];
  isCompleted: boolean;
  lastPlayedIndex: number;
  isExtraSession: boolean;
  playlistType: 'new' | 'review';
}

export interface LearningStats {
  totalVideos: number;
  completedVideos: number;
  todayNewCount: number;
  todayReviewCount: number;
  overallProgress: number;
  activeCollections: number;
  canAddExtra: boolean;
}

export interface PlaylistPreview {
  newVideos: PlaylistItem[];
  reviews: PlaylistItem[];
  totalCount: number;
  isExtraSession: boolean;
}