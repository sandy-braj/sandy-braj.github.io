export type PostType = 'research' | 'patent' | 'media' | 'press' | 'post' | 'project' | 'milestone';

export const postTypes: Record<PostType, { label: string; icon: string }> = {
  research: { label: 'Research', icon: 'research' },
  patent: { label: 'Patents', icon: 'patent' },
  media: { label: 'Media', icon: 'media' },
  press: { label: 'Press Releases', icon: 'press' },
  post: { label: 'Posts', icon: 'post' },
  project: { label: 'Projects', icon: 'project' },
  milestone: { label: 'Milestones', icon: 'milestone' }
};
