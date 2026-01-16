import { Blog, CreateBlogData } from "@/types/blog";

const API_BASE_URL = "http://localhost:3001";

// Mock data for when JSON server is not running (preview mode)
const mockBlogs: Blog[] = [
   {
    id: 1,
    title: "AI in Smart Agriculture",
    category: ["AGRICULTURE", "AI", "IOT"],
    description: "How artificial intelligence is transforming modern farming practices",
    date: "2026-01-15T10:20:30.000Z",
    coverImage: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
    content:
      "Artificial Intelligence is revolutionizing agriculture by enabling data-driven farming decisions. Smart sensors, drones, and AI models work together to monitor crop health, soil conditions, and weather patterns in real time.\n\nFarmers can now predict crop diseases, optimize irrigation, and increase yield while reducing costs. Machine learning models analyze historical and real-time data to provide accurate recommendations.\n\nAI-powered agriculture not only improves productivity but also promotes sustainability. Efficient use of water, fertilizers, and pesticides helps reduce environmental impact.\n\nAs technology advances, AI-driven smart farming will play a crucial role in ensuring food security for a growing global population."
  },
  {
    id: 2,
    title: "Full Stack Development Trends",
    category: ["WEB", "TECH"],
    description: "Key technologies shaping full stack development in 2026",
    date: "2026-01-14T15:45:00.000Z",
    coverImage: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
    content:
      "Full stack development continues to evolve rapidly with the rise of modern frameworks and cloud services. Technologies like React, Next.js, Node.js, and serverless architectures are becoming industry standards.\n\nDevelopers are focusing more on performance, scalability, and user experience. Tools such as Firebase, AWS, and Docker simplify backend management and deployment.\n\nSecurity and API-first design are also gaining importance as applications become more interconnected.\n\nIn 2026, successful full stack developers are those who can adapt quickly, learn continuously, and build end-to-end solutions efficiently."
  },
  {
    id: 3,
    title: "IoT and Smart Cities",
    category: ["IOT", "SMART CITY"],
    description: "Building intelligent cities using connected devices and data",
    date: "2026-01-13T09:10:00.000Z",
    coverImage: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    content:
      "Smart cities leverage IoT devices to improve urban living. Sensors collect real-time data on traffic, air quality, energy usage, and public infrastructure.\n\nThis data helps city administrators make informed decisions, reduce congestion, and improve public services. Smart lighting, waste management, and surveillance systems enhance efficiency and safety.\n\nCitizen engagement platforms allow people to report issues directly, increasing transparency and accountability.\n\nWith continued innovation, IoT-driven smart cities will become more sustainable, connected, and citizen-friendly."
  }
];

let localMockBlogs = [...mockBlogs];
let nextId = 4;

// Check if we're in a browser environment that can't reach localhost
const isPreviewMode = typeof window !== 'undefined' && 
  !window.location.hostname.includes('localhost') && 
  !window.location.hostname.includes('127.0.0.1');

export const blogApi = {
  getAll: async (): Promise<Blog[]> => {
    if (isPreviewMode) {
      // Return mock data in preview mode
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      return [...localMockBlogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return response.json();
  },

  getById: async (id: number): Promise<Blog> => {
    if (isPreviewMode) {
      await new Promise(resolve => setTimeout(resolve, 300));
      const blog = localMockBlogs.find(b => b.id === id);
      if (!blog) {
        throw new Error("Blog not found");
      }
      return blog;
    }
    
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }
    return response.json();
  },

  create: async (data: CreateBlogData): Promise<Blog> => {
    if (isPreviewMode) {
      await new Promise(resolve => setTimeout(resolve, 500));
      const newBlog: Blog = {
        ...data,
        id: nextId++,
        date: new Date().toISOString(),
      };
      localMockBlogs.push(newBlog);
      return newBlog;
    }
    
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        date: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to create blog");
    }
    return response.json();
  },
};
