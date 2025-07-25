import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ArrowLeft,
  Clock,
  Eye,
  Calendar,
  Play,
  ExternalLink,
} from 'lucide-react-native';
import { videos } from '../../data/mockData';
import YoutubePlayer from 'react-native-youtube-iframe';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function VideoScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Vidéo non trouvée</Text>
      </View>
    );
  }

  const handleWatchVideo = async () => {
    try {
      const supported = await Linking.canOpenURL(video.youtubeUrl);
      if (supported) {
        await Linking.openURL(video.youtubeUrl);
      } else {
        console.log("Don't know how to open URI: " + video.youtubeUrl);
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={20} color="#93c572" />
          <Text style={styles.backButtonText}>Retour</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.videoContainer}>
        <View
          style={{
            width: screenWidth,
            height: screenHeight * 0.3,
          }}
        >
          <YoutubePlayer height={400} videoId={video.youtubeId} />
        </View>

        <TouchableOpacity
          style={styles.watchOnYouTubeButton}
          onPress={handleWatchVideo}
        >
          <ExternalLink size={20} color="#fff" />
          <Text style={styles.watchOnYouTubeText}>Regarder sur YouTube</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>{video.title}</Text>

        <View style={styles.videoMeta}>
          <View style={styles.metaItem}>
            <Clock size={16} color="#666" />
            <Text style={styles.metaText}>{video.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Eye size={16} color="#666" />
            <Text style={styles.metaText}>{video.views} vues</Text>
          </View>
          <View style={styles.metaItem}>
            <Calendar size={16} color="#666" />
            <Text style={styles.metaText}>{formatDate(video.uploadDate)}</Text>
          </View>
        </View>

        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>
            {video.level.charAt(0).toUpperCase() + video.level.slice(1)}
          </Text>
        </View>
      </View>

      <View style={styles.descriptionSection}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{video.description}</Text>
      </View>

      <View style={styles.relatedSection}>
        <Text style={styles.sectionTitle}>Vidéos similaires</Text>
        <Text style={styles.sectionSubtitle}>
          Autres vidéos de francais pour le niveau {video.level}
        </Text>

        <View style={styles.relatedVideos}>
          {videos
            .filter((v) => v.level === video.level && v.id !== video.id)
            .slice(0, 3)
            .map((relatedVideo) => (
              <TouchableOpacity
                key={relatedVideo.id}
                style={styles.relatedVideoCard}
                onPress={() => router.replace(`/video/${relatedVideo.id}`)}
              >
                <View style={styles.relatedVideoThumbnail}>
                  <View style={styles.relatedVideoIcon}>
                    <Play size={16} color="#fff" fill="#fff" />
                  </View>
                  <View style={styles.relatedVideoDuration}>
                    <Text style={styles.relatedVideoDurationText}>
                      {relatedVideo.duration}
                    </Text>
                  </View>
                </View>
                <View style={styles.relatedVideoInfo}>
                  <Text style={styles.relatedVideoTitle} numberOfLines={2}>
                    {relatedVideo.title}
                  </Text>
                  <Text style={styles.relatedVideoViews}>
                    {relatedVideo.views} vues
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>

        {videos.filter((v) => v.level === video.level && v.id !== video.id)
          .length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Aucune autre vidéo disponible pour ce niveau
            </Text>
          </View>
        )}
      </View>

      <View style={styles.tipSection}>
        <Text style={styles.tipTitle}>💡 Conseil d'apprentissage</Text>
        <Text style={styles.tipText}>
          Pour une meilleure compréhension, nous recommandons de prendre des
          notes pendant la vidéo et de pratiquer avec les exercices
          correspondants dans la section "Livres".
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  errorText: {
    fontSize: 18,
    color: '#666',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#93c572',
    fontWeight: '500',
    marginLeft: 8,
  },
  videoContainer: {
    backgroundColor: '#000',
  },
  videoThumbnail: {
    height: screenHeight * 0.3,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  playButtonContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(147, 197, 114, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  playButton: {
    marginLeft: 4, // Slight offset to center the play icon visually
  },
  videoDuration: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
  watchOnYouTubeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 16,
    borderRadius: 8,
  },
  watchOnYouTubeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  videoInfo: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
    lineHeight: 28,
  },
  videoMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  levelBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#93c572',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  descriptionSection: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#2c3e50',
    lineHeight: 24,
  },
  relatedSection: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 8,
  },
  relatedVideos: {
    gap: 12,
  },
  relatedVideoCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  relatedVideoThumbnail: {
    width: 80,
    height: 60,
    backgroundColor: '#1a1a1a',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginRight: 12,
  },
  relatedVideoIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(147, 197, 114, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  relatedVideoDuration: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
  },
  relatedVideoDurationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  relatedVideoInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  relatedVideoTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2c3e50',
    marginBottom: 4,
    lineHeight: 18,
  },
  relatedVideoViews: {
    fontSize: 12,
    color: '#666',
  },
  emptyState: {
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  tipSection: {
    backgroundColor: '#fff8dc',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#f39c12',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
