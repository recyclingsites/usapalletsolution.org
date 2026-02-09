'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    title: 'Ultimate Guide to Pallet Types and Materials',
    excerpt: 'Comprehensive analysis of wooden, plastic, and metal pallets. Learn about durability, cost-effectiveness, environmental impact, and which material best suits your industry needs.',
    category: 'Education',
    readTime: '12 min read',
    icon: '📚',
    difficulty: 'Beginner',
    published: '2024-01-15',
  },
  {
    title: 'ISPM 15 Compliance: Complete International Shipping Guide',
    excerpt: 'Everything you need to know about ISPM 15 regulations, heat treatment requirements, marking standards, and avoiding costly customs delays in international trade.',
    category: 'Compliance',
    readTime: '10 min read',
    icon: '🌍',
    difficulty: 'Intermediate',
    published: '2024-01-10',
  },
  {
    title: 'How to Choose the Right Pallet Size for Maximum Efficiency',
    excerpt: 'Step-by-step guide to selecting optimal pallet dimensions based on product size, transportation mode, warehouse infrastructure, and industry standards.',
    category: 'Best Practices',
    readTime: '15 min read',
    icon: '📏',
    difficulty: 'Beginner',
    published: '2024-01-08',
  },
  {
    title: 'Pallet Recycling: Environmental and Economic Benefits',
    excerpt: 'Discover how pallet recycling reduces landfill waste, conserves natural resources, lowers carbon footprint, and generates cost savings for your business.',
    category: 'Sustainability',
    readTime: '8 min read',
    icon: '♻️',
    difficulty: 'Beginner',
    published: '2024-01-05',
  },
  {
    title: 'Maximizing Warehouse Space with Strategic Pallet Storage',
    excerpt: 'Advanced techniques for optimizing warehouse density, improving vertical storage utilization, selecting proper racking systems, and reducing operational costs.',
    category: 'Operations',
    readTime: '14 min read',
    icon: '🏭',
    difficulty: 'Advanced',
    published: '2024-01-03',
  },
  {
    title: 'Pallet Safety: Loading, Handling, and Storage Best Practices',
    excerpt: 'Essential safety guidelines to prevent workplace accidents, reduce product damage, and ensure OSHA compliance in your pallet operations.',
    category: 'Safety',
    readTime: '11 min read',
    icon: '⚠️',
    difficulty: 'Beginner',
    published: '2023-12-28',
  },
  {
    title: 'Cost-Benefit Analysis: New vs. Used vs. Recycled Pallets',
    excerpt: 'Detailed financial comparison of pallet options including purchase price, lifecycle costs, durability expectations, and total cost of ownership calculations.',
    category: 'Finance',
    readTime: '13 min read',
    icon: '💰',
    difficulty: 'Intermediate',
    published: '2023-12-25',
  },
  {
    title: 'Custom Pallet Design: Engineering Solutions for Unique Requirements',
    excerpt: 'When standard pallets won\'t work, learn about custom design options, engineering considerations, cost implications, and the custom manufacturing process.',
    category: 'Design',
    readTime: '16 min read',
    icon: '🎨',
    difficulty: 'Advanced',
    published: '2023-12-20',
  },
  {
    title: 'Pallet Quality Grading System: A Complete Guide',
    excerpt: 'Understand industry grading standards from Premium Grade A to Grade C, inspection criteria, pricing differences, and which grade matches your needs.',
    category: 'Quality',
    readTime: '9 min read',
    icon: '⭐',
    difficulty: 'Beginner',
    published: '2023-12-18',
  },
  {
    title: 'Plastic vs. Wood Pallets: Comprehensive Comparison Study',
    excerpt: 'In-depth analysis comparing plastic and wooden pallets across durability, cost, weight, environmental impact, hygiene, and industry-specific applications.',
    category: 'Comparison',
    readTime: '18 min read',
    icon: '⚖️',
    difficulty: 'Intermediate',
    published: '2023-12-15',
  },
  {
    title: 'Pallet Pooling Systems: Complete Operational Guide',
    excerpt: 'Explore the benefits and challenges of pallet pooling versus ownership, including CHEP and PECO programs, cost analysis, and operational considerations.',
    category: 'Operations',
    readTime: '12 min read',
    icon: '🔄',
    difficulty: 'Intermediate',
    published: '2023-12-12',
  },
  {
    title: 'Extending Pallet Life Through Preventive Maintenance',
    excerpt: 'Proven maintenance strategies, repair techniques, inspection protocols, and cost-saving tips to maximize your pallet investment and reduce replacement costs.',
    category: 'Maintenance',
    readTime: '10 min read',
    icon: '🔧',
    difficulty: 'Beginner',
    published: '2023-12-10',
  },
  {
    title: 'Automated Pallet Handling Systems: Technology Guide',
    excerpt: 'Overview of automated pallet handling technologies including AS/RS systems, robotic palletizers, conveyor integration, and ROI calculations.',
    category: 'Technology',
    readTime: '14 min read',
    icon: '🤖',
    difficulty: 'Advanced',
    published: '2023-12-08',
  },
  {
    title: 'Pallet Load Optimization: Mathematical Approaches',
    excerpt: 'Scientific methods for optimizing pallet loading patterns, calculating cube utilization, improving stability, and reducing shipping costs.',
    category: 'Operations',
    readTime: '17 min read',
    icon: '📊',
    difficulty: 'Advanced',
    published: '2023-12-05',
  },
  {
    title: 'Export Pallet Requirements by Country',
    excerpt: 'Comprehensive reference guide to pallet regulations, size standards, and documentation requirements for major export destinations worldwide.',
    category: 'Compliance',
    readTime: '11 min read',
    icon: '✈️',
    difficulty: 'Intermediate',
    published: '2023-12-03',
  },
  {
    title: 'Sustainable Pallet Solutions for Green Supply Chains',
    excerpt: 'Explore eco-friendly pallet alternatives, carbon footprint reduction strategies, certification programs, and building a sustainable logistics network.',
    category: 'Sustainability',
    readTime: '13 min read',
    icon: '🌱',
    difficulty: 'Intermediate',
    published: '2023-12-01',
  },
]

const industryReports = [
  {
    title: '2024 North American Pallet Market Analysis',
    description: 'Comprehensive 50-page report on market size, growth trends, competitive landscape, and future outlook for the pallet industry.',
    pages: '50 pages',
    format: 'PDF',
    icon: '📈',
  },
  {
    title: 'Sustainability in Pallet Manufacturing',
    description: 'Research report on environmental impact, recycling rates, carbon footprint analysis, and sustainable practices in the pallet industry.',
    pages: '35 pages',
    format: 'PDF',
    icon: '🌍',
  },
  {
    title: 'Automation Trends in Pallet Handling',
    description: 'Industry study on the adoption of automated systems, ROI analysis, technology comparisons, and implementation best practices.',
    pages: '42 pages',
    format: 'PDF',
    icon: '🤖',
  },
]

const whitePapers = [
  {
    title: 'Total Cost of Ownership: Pallet Investment Analysis',
    description: 'Financial framework for evaluating pallet options including purchase price, maintenance, lifecycle costs, and resale value.',
    author: 'Dr. James Wilson, Supply Chain Economist',
    icon: '💼',
  },
  {
    title: 'ISPM 15 Compliance: A Technical Guide',
    description: 'Technical specifications for heat treatment, fumigation methods, marking requirements, and international certification processes.',
    author: 'Sarah Chen, Compliance Specialist',
    icon: '📋',
  },
  {
    title: 'Optimizing Warehouse Density with Pallet Solutions',
    description: 'Engineering analysis of storage optimization, racking configurations, vertical space utilization, and density improvement strategies.',
    author: 'Michael Torres, Warehouse Efficiency Expert',
    icon: '🏢',
  },
]

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Pallet Resources & Knowledge Center</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl">
              Expert insights, comprehensive guides, industry reports, and best practices for pallet management, logistics optimization, and supply chain excellence. Your complete resource for mastering pallet operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#articles" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                Browse Articles
              </a>
              <a href="#downloads" className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border border-primary-200">
                Download Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '250+', label: 'Articles & Guides', icon: '📚' },
                { number: '50+', label: 'Industry Reports', icon: '📊' },
                { number: '30+', label: 'Video Tutorials', icon: '🎥' },
                { number: '100+', label: 'Case Studies', icon: '📈' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow text-center border border-gray-200"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Have Questions? We're Here to Help</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Can't find what you're looking for? Contact our team of experts for personalized guidance and support.
              </p>
            </motion.div>
            <ContactForm productType="Resources Inquiry" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Latest Articles & Guides</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              In-depth articles written by industry experts covering everything from basic concepts to advanced optimization strategies. Updated regularly with the latest industry insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-warm-50 to-white rounded-xl soft-shadow hover:soft-shadow-hover transition-all group overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{article.icon}</div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-secondary-500 text-white rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      article.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {article.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 group-hover:text-secondary-600 transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{article.readTime}</span>
                    <span>{article.published}</span>
                  </div>
                  <div className="flex items-center text-secondary-600 group-hover:text-primary-600 transition-colors text-sm font-semibold">
                    <span>Read Full Article</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories Section - Expanded */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
          >
            Browse by Category
          </motion.h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            Find exactly what you need by exploring our organized content categories. Each category contains specialized articles and resources tailored to specific topics.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Education', icon: '📚', count: 45, description: 'Foundational knowledge and learning resources' },
              { name: 'Safety', icon: '⚠️', count: 28, description: 'Safety protocols and best practices' },
              { name: 'Sustainability', icon: '♻️', count: 32, description: 'Environmental impact and green solutions' },
              { name: 'Operations', icon: '🏭', count: 38, description: 'Operational efficiency and optimization' },
              { name: 'Compliance', icon: '📋', count: 22, description: 'Regulatory requirements and standards' },
              { name: 'Best Practices', icon: '✓', count: 41, description: 'Industry-proven strategies and methods' },
              { name: 'Case Studies', icon: '📊', count: 35, description: 'Real-world success stories' },
              { name: 'Industry News', icon: '📰', count: 56, description: 'Latest trends and developments' },
              { name: 'Technology', icon: '🤖', count: 24, description: 'Automation and innovation' },
              { name: 'Finance', icon: '💰', count: 19, description: 'Cost analysis and ROI' },
              { name: 'Quality', icon: '⭐', count: 26, description: 'Quality standards and grading' },
              { name: 'Maintenance', icon: '🔧', count: 31, description: 'Repair and upkeep guides' },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl soft-shadow hover:soft-shadow-hover transition-all cursor-pointer group border border-gray-200"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="font-bold text-primary-600 mb-1 text-lg">{category.name}</h3>
                <p className="text-gray-500 text-xs mb-2">{category.description}</p>
                <p className="text-secondary-600 text-sm font-semibold">{category.count} articles</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Reports */}
      <section id="downloads" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Industry Reports & Research
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Access comprehensive research reports, market analysis, and industry studies. Our reports provide data-driven insights to inform your business decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industryReports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-8 rounded-xl soft-shadow border border-gray-200"
                >
                  <div className="text-5xl mb-4">{report.icon}</div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{report.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">{report.pages}</span>
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-semibold">
                      {report.format}
                    </span>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-bold transition-all hover:scale-105">
                    Download Report
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Papers */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Technical White Papers
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Deep-dive technical papers authored by industry experts. These detailed documents provide advanced insights into complex topics and specialized applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whitePapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl soft-shadow border border-gray-200"
                >
                  <div className="text-5xl mb-4">{paper.icon}</div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{paper.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{paper.description}</p>
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Author:</span> {paper.author}
                    </p>
                  </div>
                  <button className="w-full px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg font-bold transition-all hover:bg-primary-50">
                    Download White Paper
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Video Tutorial Library
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Learn visually with our comprehensive video library. From basic concepts to advanced techniques, our tutorials make complex topics easy to understand.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Pallet Selection 101',
                  duration: '12:34',
                  category: 'Beginner',
                  views: '15.2K',
                  thumbnail: '🎬',
                },
                {
                  title: 'Load Optimization Techniques',
                  duration: '18:45',
                  category: 'Advanced',
                  views: '8.7K',
                  thumbnail: '📦',
                },
                {
                  title: 'ISPM 15 Compliance Walkthrough',
                  duration: '15:20',
                  category: 'Intermediate',
                  views: '12.4K',
                  thumbnail: '🌍',
                },
                {
                  title: 'Pallet Inspection Guide',
                  duration: '9:15',
                  category: 'Beginner',
                  views: '11.8K',
                  thumbnail: '🔍',
                },
                {
                  title: 'Custom Pallet Design Process',
                  duration: '22:10',
                  category: 'Advanced',
                  views: '6.3K',
                  thumbnail: '🎨',
                },
                {
                  title: 'Warehouse Safety Best Practices',
                  duration: '14:55',
                  category: 'Intermediate',
                  views: '9.9K',
                  thumbnail: '⚠️',
                },
              ].map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white rounded-xl soft-shadow hover:soft-shadow-hover transition-all cursor-pointer group border border-gray-200"
                >
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 rounded-t-xl flex items-center justify-center text-6xl">
                      {video.thumbnail}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        video.category === 'Beginner' ? 'bg-green-100 text-green-700' :
                        video.category === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {video.category}
                      </span>
                      <span className="text-xs text-gray-500">{video.views} views</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary-600 group-hover:text-secondary-600 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                View All Videos
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloads Section - Spec Sheets & Guides */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Downloadable Resources
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Quick-reference guides, specification sheets, and practical tools you can download and use immediately in your operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Pallet Size Chart', format: 'PDF', icon: '📏', size: '2.3 MB' },
                { title: 'Load Capacity Calculator', format: 'Excel', icon: '🧮', size: '1.1 MB' },
                { title: 'ISPM 15 Requirements', format: 'PDF', icon: '📋', size: '3.5 MB' },
                { title: 'Safety Checklist', format: 'PDF', icon: '✅', size: '890 KB' },
                { title: 'Quality Grading Guide', format: 'PDF', icon: '⭐', size: '2.7 MB' },
                { title: 'Wood Species Chart', format: 'PDF', icon: '🌲', size: '1.8 MB' },
                { title: 'Cost Comparison Tool', format: 'Excel', icon: '💰', size: '950 KB' },
                { title: 'Inspection Checklist', format: 'PDF', icon: '🔍', size: '1.2 MB' },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl soft-shadow hover:soft-shadow-hover transition-all cursor-pointer group border border-gray-200"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{resource.icon}</div>
                  <h3 className="font-bold text-primary-600 mb-2">{resource.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded font-semibold">
                      {resource.format}
                    </span>
                    <span>{resource.size}</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg text-sm font-bold transition-all group-hover:scale-105">
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Pallet Industry Glossary
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Comprehensive reference of industry terminology, technical terms, and common acronyms used in pallet manufacturing and logistics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  term: 'Block Pallet',
                  definition: 'A pallet using blocks (solid pieces of wood) instead of stringers to support the deck boards, allowing 4-way entry for forklifts.',
                },
                {
                  term: 'Stringer Pallet',
                  definition: 'A pallet using continuous boards (stringers) running the length of the pallet to support the deck boards, typically allowing 2-way or partial 4-way entry.',
                },
                {
                  term: 'ISPM 15',
                  definition: 'International Standards for Phytosanitary Measures No. 15 - regulations requiring heat treatment or fumigation of wooden pallets used in international trade.',
                },
                {
                  term: 'GMA Pallet',
                  definition: 'Grocery Manufacturers Association standard pallet measuring 48" × 40", the most common pallet size in North America.',
                },
                {
                  term: 'Deck Boards',
                  definition: 'The top and/or bottom boards on a pallet that create the surface for holding products.',
                },
                {
                  term: 'Static Load',
                  definition: 'Maximum weight a pallet can hold when stationary on a flat surface.',
                },
                {
                  term: 'Dynamic Load',
                  definition: 'Maximum weight a pallet can safely carry while being moved by a forklift or pallet jack.',
                },
                {
                  term: 'Racking Load',
                  definition: 'Maximum weight a pallet can hold when supported in warehouse racking, typically lower than static load.',
                },
                {
                  term: 'Heat Treatment (HT)',
                  definition: 'Process of heating wood to 56°C (133°F) for 30 minutes to kill pests, required for ISPM 15 compliance.',
                },
                {
                  term: 'Pallet Pooling',
                  definition: 'Rental system where pallets are leased, tracked, and returned for reuse rather than purchased outright.',
                },
                {
                  term: 'EUR/EPAL Pallet',
                  definition: 'European Pallet Association standard measuring 1200mm × 1000mm (47.2" × 39.4"), required for European shipping.',
                },
                {
                  term: 'Notched Stringer',
                  definition: 'Stringers with cutouts allowing partial 4-way forklift entry while maintaining structural integrity.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-primary-600 mb-2">{item.term}</h3>
                  <p className="text-gray-700 text-sm">{item.definition}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                View Complete Glossary (150+ Terms)
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Pallet Industry Statistics
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Data-driven insights into the pallet industry, market trends, and operational benchmarks to help inform your business decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  stat: '2+ Billion',
                  label: 'Pallets produced annually in North America',
                  icon: '📊',
                },
                {
                  stat: '$8.2 Billion',
                  label: 'Total market value of North American pallet industry',
                  icon: '💰',
                },
                {
                  stat: '90%',
                  label: 'Of global goods transported on pallets',
                  icon: '🌍',
                },
                {
                  stat: '48" × 40"',
                  label: 'Most common pallet size (35% market share)',
                  icon: '📏',
                },
                {
                  stat: '500M+',
                  label: 'Pallets recycled or repaired annually',
                  icon: '♻️',
                },
                {
                  stat: '15-20 years',
                  label: 'Average lifespan of a well-maintained wooden pallet',
                  icon: '⏳',
                },
                {
                  stat: '93%',
                  label: 'Of warehouse accidents involve pallets',
                  icon: '⚠️',
                },
                {
                  stat: '30%',
                  label: 'Cost savings from pallet pooling vs. ownership',
                  icon: '💵',
                },
                {
                  stat: '80%',
                  label: 'Of pallets in circulation are wooden',
                  icon: '🌲',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl soft-shadow text-center border border-gray-200"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-4xl font-bold text-primary-600 mb-3">{item.stat}</div>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Success Stories & Case Studies
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Learn from real-world examples of businesses that optimized their pallet operations and achieved measurable results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: 'National Retail Chain',
                  industry: 'Retail',
                  challenge: 'High pallet costs and inefficient warehouse space utilization',
                  solution: 'Implemented custom pallet sizing and pooling system',
                  results: ['35% reduction in pallet costs', '22% increase in warehouse density', '$1.2M annual savings'],
                  icon: '🏬',
                },
                {
                  company: 'Food & Beverage Distributor',
                  industry: 'Food Distribution',
                  challenge: 'Non-compliance with ISPM 15 causing export delays',
                  solution: 'Switched to heat-treated pallets with full certification',
                  results: ['100% compliance achieved', 'Zero customs delays', '18% faster delivery times'],
                  icon: '🍽️',
                },
                {
                  company: 'Automotive Parts Manufacturer',
                  industry: 'Automotive',
                  challenge: 'Frequent pallet failure and product damage during shipping',
                  solution: 'Upgraded to heavy-duty block pallets with higher capacity',
                  results: ['90% reduction in pallet failures', '65% less product damage', 'ROI achieved in 8 months'],
                  icon: '🚗',
                },
                {
                  company: 'E-commerce Fulfillment Center',
                  industry: 'E-commerce',
                  challenge: 'Inconsistent pallet sizes slowing warehouse operations',
                  solution: 'Standardized on GMA pallets across entire facility',
                  results: ['40% faster loading times', '25% improvement in order accuracy', '$800K labor savings'],
                  icon: '📦',
                },
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-8 rounded-xl soft-shadow border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{study.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-600">{study.company}</h3>
                      <p className="text-sm text-gray-500">{study.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="text-green-500 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg font-bold transition-all hover:bg-primary-50">
                    Read Full Case Study
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Stay Updated with Industry Insights</h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Subscribe to our newsletter for the latest pallet industry insights, tips, research reports, and exclusive resources delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white focus:outline-none focus:border-white/50 transition-colors"
              />
              <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white/70 mt-4">Join 15,000+ industry professionals. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Ready to Optimize Your Pallet Operations?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Put your knowledge into action. Contact our experts for personalized recommendations and solutions tailored to your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                  Contact Our Experts
                </Link>
                <Link href="/products" className="px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border-2 border-primary-600">
                  Browse Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
