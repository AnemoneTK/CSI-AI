import { Card } from "antd";

function Type() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
        {/* Chat Container */}
        <div className="bg-white rounded-xl shadow-md p-6 h-[80dvh] w-[80dvw] flex flex-col">
          {/* Chat Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800">Select AI Type</h1>
            <p className="text-lg text-gray-600">How can I help you today?</p>
          </div>

          {/* Suggestions */}
          <div className="grid w-full  h-full justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card
              className="hover:shadow-lg transition duration-300 rounded-lg h-1/3"
              bordered={false}
            >
              <p className="text-gray-800 font-medium">
                Help me sound like an expert for an upcoming trip
              </p>
            </Card>
            <Card
              className="hover:shadow-lg transition duration-300 rounded-lg h-1/3"
              bordered={false}
            >
              <p className="text-gray-800 font-medium">
                Outline a logical sales pitch for a new product
              </p>
            </Card>
            <Card
              className="hover:shadow-lg transition duration-300 rounded-lg h-1/3"
              bordered={false}
            >
              <p className="text-gray-800 font-medium">
                Help me get organized with a list of 10 tips
              </p>
            </Card>
          </div>

          {/* Input Section */}
        </div>
      </div>
    </>
  );
}

export default Type;
