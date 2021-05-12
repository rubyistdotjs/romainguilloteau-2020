import React from 'react';

export const Books = () => {
  return (
    <section className="my-32">
      <div className="container mx-auto">
        <h2 className="text-7xl leading-snug font-bold">Books</h2>
        <div className="grid grid-cols-3">
          {new Array(3).fill(null).map(() => (
            <div className="my-10">
              <h3 className="text-4xl font-bold leading-snug mb-8">Reading</h3>

              <div className="flex flex-row">
                <div className="bg-gray-800 w-16 h-24"></div>
                <div className="ml-3">
                  <h4 className="text-xl font-semibold">Permanent Record</h4>
                  <span>Edward Snowden</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
