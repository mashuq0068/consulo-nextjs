import React from "react";

const TriangleCollage = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
      }}
    >
      {/* Triangle 1 */}
      <img
        src="https://picsum.photos/400/400?1"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />

      {/* Triangle 2 */}
      <img
        src="https://picsum.photos/400/400?2"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          clipPath: "polygon(0% 0%, 50% 100%, 0% 100%)",
        }}
      />

      {/* Triangle 3 */}
      <img
        src="https://picsum.photos/400/400?3"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)",
        }}
      />
    </div>
  );
};

export default TriangleCollage;