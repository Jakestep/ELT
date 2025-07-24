import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const AdditionalServices = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Additional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services to ensure your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Maintenance & Support
            </h3>
            <p className="text-gray-600 mb-4">
              Ongoing maintenance, updates, and technical support to keep your
              applications running smoothly.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Bug fixes and updates
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Performance monitoring
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Security patches
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cloud Migration
            </h3>
            <p className="text-gray-600 mb-4">
              Seamless migration of your applications to cloud platforms for
              improved scalability and performance.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                AWS, Azure, GCP
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Zero-downtime migration
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Cost optimization
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Security compliance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
