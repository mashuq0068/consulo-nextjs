import { ServiceDataType } from "@/types/service";
import Image from "next/image";

const CardService = ({ data }: ServiceDataType) => {
  const { title, description, image } = data || {};

  return (
    <div style={{padding:'0px'}} className="multicolumn-card hover:bg-transparent">

      {/* FIXED IMAGE BOX (IMPORTANT) */}
      {image && (
        <div
          style={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
            // borderRadius: "8px",
            // marginBottom: "16px"
          }}
        >
          <img
            src={image}
            alt={title || "service"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
            width={400}
            height={400}
            
          />
        </div>
      )}

     <div style={{ padding:'25px'}}>
       {title && <h2 className="heading text-28">{title}</h2>}

      {description && (
        <div className="text text-16">{description}</div>
      )}
     </div>

    </div>
  );
};

export default CardService;