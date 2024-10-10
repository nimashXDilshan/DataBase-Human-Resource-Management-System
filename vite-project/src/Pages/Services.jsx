import React from 'react';

function Services() {
  return (
    <div className="services-page bg-gradient-to-r from-gray-900 to-gray-800 py-10 px-4 md:px-16 lg:px-24">
      <h1 className="text-5xl font-bold text-center text-white mb-8">Our Services</h1>
      <p className="text-lg text-center text-gray-300 mb-10 max-w-2xl mx-auto">
        At Jupiter Apparel, we offer a variety of services to meet all your fashion needs. Discover how we can help bring your ideas to life with creativity and craftsmanship.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Service 1 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Custom Design</h2>
          <p className="text-gray-300">
            Create your unique apparel design with our professional designers. We bring your ideas to life with premium fabrics and exceptional craftsmanship.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Bulk Orders</h2>
          <p className="text-gray-300">
            We offer special pricing for bulk orders, perfect for businesses, teams, or events. High-quality production with fast turnaround times.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Sustainable Fashion</h2>
          <p className="text-gray-300">
            Our commitment to sustainability ensures that all our apparel is eco-friendly, using organic fabrics and ethical production practices.
          </p>
        </div>

        {/* Service 4 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Apparel Printing</h2>
          <p className="text-gray-300">
            We provide high-quality apparel printing services, including screen printing, embroidery, and heat transfers, for a professional finish.
          </p>
        </div>

        {/* Service 5 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Fashion Consultation</h2>
          <p className="text-gray-300">
            Our fashion experts provide consultation to help you choose the right styles, colors, and designs that align with your brand and vision.
          </p>
        </div>

        {/* Service 6 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Private Labeling</h2>
          <p className="text-gray-300">
            Build your own brand with our private labeling services. We offer custom tags, labels, and packaging for a truly unique product.
          </p>
        </div>

        {/* New Service 7 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">E-commerce Solutions</h2>
          <p className="text-gray-300">
            We help you set up and optimize your online store to reach a global audience. Our e-commerce solutions ensure a seamless shopping experience for your customers.
          </p>
        </div>

        {/* New Service 8 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Digital Fashion Showcases</h2>
          <p className="text-gray-300">
            Showcase your latest collections with our digital fashion show services. We create immersive online experiences that bring your designs to life.
          </p>
        </div>

        {/* New Service 9 */}
        <div className="service-card bg-gray-700 shadow-lg rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Branding and Marketing Support</h2>
          <p className="text-gray-300">
            Elevate your brand with our comprehensive marketing strategies. We provide branding, social media, and promotional services to increase your reach and engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
