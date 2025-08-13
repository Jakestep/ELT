import * as FiIcons from "react-icons/fi";
import SafeIcon from "../../common/SafeIcon";

const AdditionalServices = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Additional Services
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Comprehensive support services to ensure your success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-background rounded-lg border border-gray-200 p-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Maintenance & Support
            </h3>
            <p className="mb-4 text-gray-600">
              Ongoing maintenance, updates, and technical support to keep your
              applications running smoothly.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Bug fixes and updates
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Performance monitoring
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Security patches
              </li>
            </ul>
          </div>
          <div className="bg-background rounded-lg border border-gray-200 p-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Cloud Migration
            </h3>
            <p className="mb-4 text-gray-600">
              Seamless migration of your applications to cloud platforms for
              improved scalability and performance.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                AWS, Azure, GCP
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Zero-downtime migration
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Cost optimization
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
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
