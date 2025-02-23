export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  videoUrl?: string;
  slidesUrl?: string;
  posterUrl?: string;
  websiteUrl?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "Workshop on Learning Effective Abstractions for Planning (LEAP) @ CoRL",
    title: "Sequential Object-Centric Relative Placement Prediction for Long-horizon Imitation Learning",
    authors: "Ben Eisner, Eric Cai, Octavian Donca, Teeratham Vitchutripop, David Held",
    paperUrl: "https://openreview.net/forum?id=4CLiGBQV3U",
    codeUrl: "https://github.com/ey-cai/non-rigid",
    websiteUrl:"https://sites.google.com/view/taxpolicy-corl-2024/home",
    imageUrl:
      "/publication-preview/taxpolicy.png",
  },
  {
    year: "2023",
    conference: "Robotics Institute Summer Scholars Working Papers Journals",
    title: "TaskSeg: Task-Specific Object Segmentation Through Demonstrations",
    authors: "Teeratham Vitchutripop, Jenny Wang, David Held",
    paperUrl: "https://drive.google.com/file/d/1NTTEFQkG7LAB6yPxW82573ZabHyVr146/view",
    codeUrl: "https://github.com/tjvitchutripop/TaskSeg",
    videoUrl:"https://www.youtube.com/watch?v=B2FV81tip_I",
    imageUrl:
      "/publication-preview/taskseg.gif",
  },
  {
    year: "2023",
    conference: "Submitted",
    title: "LASSO: Learning Latent Policies via State Space Modeling",
    authors: "Mohammad Samin Yasar, Teeratham Vitchutripop, Tariq Iqbal",
    // paperUrl: "https://arxiv.org/abs/2302.13095",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
    slidesUrl:"https://myuva-my.sharepoint.com/:p:/g/personal/tv9fm_virginia_edu/Ebib4Zc4IKdBn6OKCUQuQk0BdFKM5U0i0VsMDPxdtbDNww?rtime=Oy-Wh1VU3Ug",
    imageUrl: "/publication-preview/lasso.gif"
  },
  
];
