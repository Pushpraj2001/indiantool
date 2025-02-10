export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Indian Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            A collection of useful tools with Indian context
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Text Tools
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Convert, translate, and manipulate text in Indian languages
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Date Converter
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Convert between different Indian calendar systems
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Currency Tools
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Convert and calculate Indian currency values
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}