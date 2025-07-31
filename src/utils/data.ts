// app/components/data.ts

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  demoUrl: string;
  codeUrl: string;
}


export interface ProjectType {
  id: number;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  demoUrl: string;
  codeUrl: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Indian Coffee Trade – Empowering Farmers Through Transparent Bidding",
    description:
      "Indian Coffee Trade is a digital marketplace designed to streamline the agricultural commodity trade, specifically for coffee and pepper farmers in India. The platform bridges the gap between farmers and traders by allowing farmers to list their produce and receive competitive bids from interested buyers. The bidding system ensures transparency and fair pricing, empowering farmers to get the best value for their crops. Traders can view product details, place bids in real time, and complete secure purchases if they win the bid. The system includes features such as user authentication, product listing management, bid tracking, and purchase history.",
    tech: ["Next.js", "Tailwind CSS", "JWT Token"],
    images: ["/Assets/Images/ICTOne.png", "/Assets/Images/ICTTwo.png", "/Assets/Images/ICTThree.png"],
    demoUrl: "https://indian-coffee-trade.vercel.app/",
    codeUrl: "#"
  },
  {
    id: 2,
    title: 'Paxillin – A Knowledge-Sharing Network for Collaborative Learning',
    description:
      'Paxillin is a dynamic knowledge-sharing platform designed to connect individuals who are eager to learn, teach, and grow together. At its core, Paxillin fosters a community-driven environment where users can interact with one another, exchange ideas, and build meaningful learning relationships. Whether someone is seeking guidance in a specific field or looking to share their own expertise, Paxillin provides a space to give and gain knowledge seamlessly. Users can create personalized profiles, list their skills or areas of interest, and discover others with complementary goals. The platform encourages peer-to-peer mentorship, collaborative discussions, and real-time engagement through structured chats or calls. With a focus on accessibility and community value, Paxillin is not just a social platform — its a living knowledge ecosystem that thrives on mutual growth and continuous learning.',
    tech: ['Next.js', 'Tailwind CSS'],
    images: ['/Assets/Images/PaxillinOne.png', '/Assets/Images/PaxillinTwo.png', 'Assets/Images/PaxillinThree.png'],
    demoUrl: 'https://paxillin-ten.vercel.app/',
    codeUrl: '#'
  },
  {
    id: 3,
    title: 'Netvers – Empowering the Future of Networking',
    description:
      'Netvers is a modern networking and referral-based platform designed to transform how users connect and grow their professional circle. The platform supports two primary roles: admins and users. Registered users can connect with each other and build referral-based relationships within the platform. Each user is assigned a unique E-PIN, which functions as both a referral key and an identifier. When a user refers someone to the platform using their E-PIN, a 10% referral reward is credited to their account. This system forms a hierarchical, tree-like structure that visually maps referral chains and user growth across the platform. Users have access to their own personalized dashboards where they can track their network, referral earnings, and E-PIN usage. Admins oversee the user network, manage referrals, and ensure smooth operations across the ecosystem. Netvers not only promotes organic user growth but also incentivizes engagement through its transparent and rewarding referral mechanism.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT Token'],
    images: ['/Assets/Images/projectOne.png', '/Assets/Images/projectOne.png'],
    demoUrl: 'https://netvers.in/home',
    codeUrl: '#',
  }
  ,
  {
    id: 4,
    title: 'Medisales – Simplifying Healthcare Sales',
    description:
      'Medisales is a role-based pharmaceutical sales management platform designed to streamline operations between administrators and medical representatives (MRs). The admin dashboard allows administrators to onboard MRs, assign them to specific medical stores, and monitor their performance. MRs are required to mark attendance daily by submitting a real-time selfie, ensuring authenticity and accountability. They can also log product sales during store visits directly from their dashboard. Admins have access to real-time data including MR presence, visit reports, store-wise sales, and can manage the entire sales workflow efficiently. The system enhances transparency, improves field operations, and provides robust reporting for decision-makers.',
    tech: ['Next.js', 'JWT Token', 'Tailwind CSS', 'NodeJs', 'ExpressJS'],
    images: ['/Assets/Images/project2.png', '/Assets/Images/project2two.png', '/Assets/Images/ProjectImageTwo.png'],
    demoUrl: 'https://www.medisales.com',
    codeUrl: '#',
  }
  ,

];

