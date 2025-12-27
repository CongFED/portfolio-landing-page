export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero
    hero: {
      welcome: "Welcome to my portfolio",
      name: "Phuoc Cong",
      title: "Fullstack Developer",
      description:
        "I build modern web applications with excellent user experience. Specialized in React, Next.js and beautiful UI design.",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
    },
    // About
    about: {
      title: "About Me",
      description1:
        "Hi! I'm a Fullstack Developer with over 3 years of experience building modern web applications. I'm passionate about creating beautiful interfaces combined with cutting-edge technology.",
      description2:
        "I focus on using React, Next.js, TypeScript and modern frontend tools to create excellent user experiences.",
      frontend: "Frontend",
      backend: "Backend",
      projectsCompleted: "Projects Completed",
      yearsExperience: "Years Experience",
      clientSatisfaction: "Client Satisfaction",
      supportReady: "Support Ready",
    },
    // Projects
    projects: {
      title: "Featured Projects",
      subtitle: "Carefully selected outstanding projects",
      all: "All",
      website: "Website",
      webapp: "Web App",
      viewAll: "View All Projects",
    },
    // Contact
    contact: {
      title: "Get In Touch",
      subtitle: "Contact me to discuss projects or collaboration opportunities",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "email@example.com",
        messagePlaceholder: "Your message...",
        send: "Send Message",
        sent: "✓ Sent!",
        phone:"Phone"
      },
      direct: "Direct Contact",
      phone: "Phone",
      location: "Location",
      followMe: "Follow me on",
          sending:"Sending...",
      sent:"✓ Sent!",
      SendAMessage:"Send a message",
    },
    // Footer
    footer: {
      allRights: "All rights reserved.",
      crafted: "Crafted with ❤️ using Next.js, React & Tailwind CSS",
      home:"Home",
      about:"About",
      projects:"Projects",
      contact:"Contact"
    },
  },
  vi: {
    // Navigation
    nav: {
      home: "Trang Chủ",
      about: "Giới Thiệu",
      projects: "Dự Án",
      contact: "Liên Hệ",
    },
    // Hero
    hero: {
      welcome: "Chào mừng đến portfolio của tôi",
      name: "PHUOCONGDEV",
      title: "Fullstack Developer",
      description:
        "Tôi xây dựng các ứng dụng web hiện đại với trải nghiệm người dùng tuyệt vời. Chuyên biệt trong React, Next.js và thiết kế giao diện đẹp mắt.",
      viewWork: "Xem Dự Án Của Tôi",
      getInTouch: "Liên Hệ Tôi",
    },
    // About
    about: {
      title: "Giới Thiệu Về Tôi",
      description1:
        "Xin chào! Tôi là một Fullstack Developer với hơn 3 năm kinh nghiệm trong việc xây dựng các ứng dụng web hiện đại. Tôi đam mê tạo ra những giao diện đẹp mắt kết hợp với công nghệ tiên tiến.",
      description2:
        "Tôi chuyên tâm vào việc sử dụng React, Next.js, TypeScript và các công cụ frontend hiện đại để tạo ra những trải nghiệm người dùng tuyệt vời.",
      frontend: "Frontend",
      backend: "Backend",
      projectsCompleted: "Dự Án Hoàn Thành",
      yearsExperience: "Năm Kinh Nghiệm",
      clientSatisfaction: "Độ Hài Lòng Khách Hàng",
      supportReady: "Hỗ Trợ 24/7",
    },
    // Projects
    projects: {
      title: "Các Dự Án Nổi Bật",
      subtitle: "Các dự án nổi bật được chọn lọc kỹ lưỡng",
      all: "Tất Cả",
      website: "Website",
      webapp: "Web App",
      viewAll: "Xem Tất Cả Dự Án",
    },
    // Contact
    contact: {
      title: "Liên Hệ Với Tôi",
      subtitle: "Hãy liên lạc với tôi để thảo luận về dự án hoặc hợp tác",
      form: {
        name: "Tên",
        email: "Email",
        message: "Tin Nhắn",
        namePlaceholder: "Tên của bạn",
        emailPlaceholder: "email@example.com",
        messagePlaceholder: "Nội dung của bạn...",
        send: "Gửi Tin Nhắn",
        sent: "✓ Đã gửi!",
        phone:"Số điện thoại"
      },
      direct: "Liên Hệ Trực Tiếp",
      phone: "Điện Thoại",
      location: "Địa Điểm",
      followMe: "Theo dõi tôi trên",
  
       sending:"Đang gửi...",
      sent:"✓ Đã gửi!",
      SendAMessage:"Gửi tin nhắn"
    },
    // Footer
    footer: {
      allRights: "Bản quyền được bảo lưu.",
      crafted: "Được tạo bằng ❤️ sử dụng Next.js, React & Tailwind CSS",
        home:"Trang Chủ",
      about:"Giới Thiệu",
      projects:"Dự Án",
      contact:"Liên Hệ"
    },
  },
}

export type Language = keyof typeof translations
