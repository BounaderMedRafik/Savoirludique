import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CirclePlay as PlayCircle, Clock, Eye } from 'lucide-react-native';
import { videos } from '../../data/mockData';
import { Video, Level } from '../../types';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function VideosScreen() {
  const [selectedLevel, setSelectedLevel] = useState<Level | 'all'>('all');
  const router = useRouter();

  const levels = [{ key: 'moyenne', label: '1ère Année Moyenne' }];

  const filteredVideos = videos.filter((video) => video.level === 'moyenne');

  const handleWatchVideo = (video: Video) => {
    router.push(`/video/${video.id}`);
  };

  const getThumbnailUrl = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <PlayCircle size={32} color="#93c572" />
        <Text style={styles.headerTitle}>Vidéos</Text>
        <Text style={styles.headerSubtitle}>
          Apprenez avec nos vidéos pédagogiques
        </Text>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level.key}
              style={[
                styles.filterButton,
                selectedLevel === level.key && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedLevel(level.key as Level | 'all')}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedLevel === level.key && styles.filterButtonTextActive,
                ]}
              >
                {level.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.videosContainer}>
        {filteredVideos.map((video) => (
          <TouchableOpacity
            key={video.id}
            style={styles.videoCard}
            onPress={() => handleWatchVideo(video)}
          >
            <View style={styles.videoThumbnail}>
              <View style={styles.videoIcon}>
                <PlayCircle size={32} color="#93c572" />
              </View>
              <View style={styles.videoDuration}>
                <Clock size={12} color="#fff" />
                <Text style={styles.videoDurationText}>{video.duration}</Text>
              </View>
            </View>

            <View style={styles.videoInfo}>
              <Text style={styles.videoTitle}>{video.title}</Text>
              <Text style={styles.videoLevel}>
                {video.level.charAt(0).toUpperCase() + video.level.slice(1)}
              </Text>
              <Text style={styles.videoDescription} numberOfLines={2}>
                {video.description}
              </Text>

              <View style={styles.videoFooter}>
                <View style={styles.videoMeta}>
                  <Eye size={14} color="#666" />
                  <Text style={styles.videoMetaText}>{video.views} vues</Text>
                </View>
                <View style={styles.watchButton}>
                  <PlayCircle size={14} color="#93c572" />
                  <Text style={styles.watchButtonText}>Regarder</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {filteredVideos.length === 0 && (
        <View style={styles.emptyState}>
          <PlayCircle size={48} color="#ccc" />
          <Text style={styles.emptyStateText}>
            Aucune vidéo trouvée pour ce niveau
          </Text>
        </View>
      )}

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>À propos des vidéos</Text>
        <Text style={styles.infoText}>
          Nos vidéos explicatives de francais sont conçues pour compléter vos
          manuels scolaires. Chaque vidéo aborde un concept spécifique avec des
          explications claires et des exemples pratiques.
        </Text>
        <Text style={styles.infoText}>
          Les vidéos sont organisées par niveau d'enseignement pour faciliter
          votre apprentissage progressif.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  filterContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  filterButtonActive: {
    backgroundColor: '#93c572',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  videosContainer: {
    padding: 16,
  },
  videoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  videoThumbnail: {
    height: 120,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  videoIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(147, 197, 114, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoDuration: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  videoDurationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  videoInfo: {
    padding: 16,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  videoLevel: {
    fontSize: 12,
    color: '#93c572',
    fontWeight: '500',
    marginBottom: 8,
  },
  videoDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  videoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoMetaText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  watchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#93c572',
  },
  watchButtonText: {
    color: '#93c572',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
  },
  infoSection: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
});
