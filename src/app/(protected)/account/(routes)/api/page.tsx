import React, { useRef } from "react";

function page() {
  // const textRef = useRef(null);
  // const handleCopy = () => {
  //     if (textRef.current) {
  //       textRef.current.select();
  //       document.execCommand('copy');
  //     }
  //   };
  return (
    <div className="flex items-center justify-around bg-gray-100">
      <div className="w-[94%] bg-white flex flex-col my-4 p-5 rounded-md">
        <p>Api Access</p>
        <hr className="w-full mt-2" />
        {/* Api Key */}
        <p className="text-sm md:text-lg font-semibold my-2 w-[95%]">
          Your Apikey:{" "}
          <span className="text-md">
            ckw7gXkLMP6ff1oJFfjiO74T9Y8rySPz4v6kABWu
          </span>
        </p>
        <>
          <p className="text-xl md:text-3xl font-bold my-2">
            Get Tracking numbers shipped inside of the USA
          </p>
          {/* Api end point for Usa Post */}
          <p className="text-md font-light my-2">
            API Endpoint for USA TNs:{" "}
            <span className="text-xs p-2 bg-gray-100 ">
              POST
              https://fthoqqsb4k.execute-api.us-east-1.amazonaws.com/prod/get-trackingnr
            </span>
          </p>
          {/* Request Hedder */}
          <p className="text-md font-light my-2">
            Request header:{" "}
            <span className="text-xs p-2 bg-gray-100">
              x-api-key: ckw7gXkLMP6ff1oJFfjiO74T9Y8rySPz4v6kABWu
            </span>
          </p>
          {/* request boday */}
          <p className="mt-2 text-lg">Request body:</p>
          <div className="bg-gray-100 w-[98%]  mb-2 p-3">
            {` '{
  city: string,            // full city name (e.g. "Atlanta"). This field is optional. 
                           // if no city is supplied, you get a TN to a random city within the supplied state.
  state: string,           // 2-character state code (e.g. "GA")
  from: number,            // timestamp (milliseconds) of min. desired TN delivery date (e.g. 1705295589204)
  to: number,              // timestamp (milliseconds) of max. desired TN delivery date (e.g. 1705381989204)
  checkOnWalmart: boolean, // optional: when using for walmart, set this to true.
                           // When enabled, we will check TNs on walmart.com if another seller might have used it before.
  minShippedAt: number,    // optional: timestamp (milliseconds) of minimum shippedAt time
  originCity: string,      // optional: filter by origin city where the package was shipped from (e.g. "NEW YORK")
  originState: string,     // optional: filter by origin state code where the package was shipped from (e.g. "NY").
  
  carrier: string,         // optional: filter by carrier, must be any of ["fedex","ups","any"]. Defaults to "any".
  
  deliveryState: string[],   // optional: filter by delivery state, any of: ["delivered","in-transit"]. Defaults to "in-transit".
  
  allowPhoto: string        // allow that the TN has a delivery proof photo (default: false)
  allowSignature: string    // allow that the TN has a signature proof-of-delivey attached (default: false)

  enableDoubleCheck: boolean, // optional: default=true. When false, we will NOT double check the TN with the carrier to ensure
                                 in-transit-status and destination are still the same as when we found the TN.
                                 There is a (small) possibility the double check fails sometimes, then it will
                                 return {errorCode:"DOUBLE_CHECK_FAILED"}. In that case, retry the request a few times.
                                 If it keeps failing, retry with "enableDoubleCheck:false", and check it at the carrier on your own.
}'`}
          </div>
          {/* Return body (Success)  */}
          <p className="mt-4 pt-3 border-t text-lg ">Return body (Success):</p>
          <div className="bg-gray-100 w-[98%]  mb-2 p-3">
            {` '{
  trackingNr: string,       // e.g. "786387220642"
  creditsRemaining: number, // e.g. 123
  destCity: string,         // TN destination city (e.g. "ATLANTA")
  destState: string,        // TN destination state code (e.g. "GA")
  estDeliveryDate: string,  // TN estimated delivery date: ISO date string incl. time zone (e.g. "2021-04-29T16:30:00-04:00")
  shippedAt: string,        // TN ship date: ISO date string incl. time zone (e.g. "2021-04-29T16:30:00-04:00")
  originCity: string,       // city where the package was shipped from (e.g. "NEW YORK")
  originState: string,      // state code where the package was shipped from (e.g. "NY")
  shipMethod: string        // Shipment method (fedex Home, fedex ground, etc.)
}'`}
          </div>
          {/* error body   */}
          <p className="mt-4 pt-3 border-t text-lg ">Error body :</p>
          <div className="bg-gray-100 w-[98%]  mb-2 p-3">
            {` '{
  error: string,          // error message e.g. "No credits"
  errorCode?: string,     // optional: any of ["NO_TN_FOUND", "NO_CREDITS", "INVALID_APIKEY", "DOUBLE_CHECK_FAILED"]
}'`}
          </div>
        </>
        <>
          {/* numbers shipped internationally */}
          <p className="text-xl md:text-3xl font-bold mt-6 mb-3 ">
            Get Tracking numbers shipped internationally
          </p>
          {/* Api end point for Usa Post */}
          <p className="text-md font-light my-2">
            API Endpoint for USA TNs:{" "}
            <span className="text-xs p-2 bg-gray-100 ">
              POST
              https://fthoqqsb4k.execute-api.us-east-1.amazonaws.com/prod/get-trackingnr
            </span>
          </p>
          {/* Request Hedder */}
          <p className="text-md font-light my-2">
            Request header:{" "}
            <span className="text-xs p-2 bg-gray-100">
              x-api-key: ckw7gXkLMP6ff1oJFfjiO74T9Y8rySPz4v6kABWu
            </span>
          </p>
          {/* request boday */}
          <p className="mt-2 text-lg">Request body:</p>
          <div className="bg-gray-100 w-[98%]  mb-2 p-3">
            {` '{
  city: string,            // full city name (e.g. "Atlanta"). This field is optional. 
                           // if no city is supplied, you get a TN to a random city within the supplied state.
  state: string,           // 2-character state code (e.g. "GA")
  from: number,            // timestamp (milliseconds) of min. desired TN delivery date (e.g. 1705295589204)
  to: number,              // timestamp (milliseconds) of max. desired TN delivery date (e.g. 1705381989204)
  checkOnWalmart: boolean, // optional: when using for walmart, set this to true.
                           // When enabled, we will check TNs on walmart.com if another seller might have used it before.
  minShippedAt: number,    // optional: timestamp (milliseconds) of minimum shippedAt time
  originCity: string,      // optional: filter by origin city where the package was shipped from (e.g. "NEW YORK")
  originState: string,     // optional: filter by origin state code where the package was shipped from (e.g. "NY").
  
  carrier: string,         // optional: filter by carrier, must be any of ["fedex","ups","any"]. Defaults to "any".
  
  deliveryState: string[],   // optional: filter by delivery state, any of: ["delivered","in-transit"]. Defaults to "in-transit".
  
  allowPhoto: string        // allow that the TN has a delivery proof photo (default: false)
  allowSignature: string    // allow that the TN has a signature proof-of-delivey attached (default: false)

  enableDoubleCheck: boolean, // optional: default=true. When false, we will NOT double check the TN with the carrier to ensure
                                 in-transit-status and destination are still the same as when we found the TN.
                                 There is a (small) possibility the double check fails sometimes, then it will
                                 return {errorCode:"DOUBLE_CHECK_FAILED"}. In that case, retry the request a few times.
                                 If it keeps failing, retry with "enableDoubleCheck:false", and check it at the carrier on your own.
}'`}
          </div>
          {/* Return body (Success)  */}
          <p className="mt-4 pt-3 border-t text-lg ">Return body (Success):</p>
          <div className="bg-gray-100 w-[98%]  mb-2 p-3">
            {` '{
  trackingNr: string,       // e.g. "786387220642"
  creditsRemaining: number, // e.g. 123
  destCity: string,         // TN destination city (e.g. "ATLANTA")
  destState: string,        // TN destination state code (e.g. "GA")
  estDeliveryDate: string,  // TN estimated delivery date: ISO date string incl. time zone (e.g. "2021-04-29T16:30:00-04:00")
  shippedAt: string,        // TN ship date: ISO date string incl. time zone (e.g. "2021-04-29T16:30:00-04:00")
  originCity: string,       // city where the package was shipped from (e.g. "NEW YORK")
  originState: string,      // state code where the package was shipped from (e.g. "NY")
  shipMethod: string        // Shipment method (fedex Home, fedex ground, etc.)
}'`}
          </div>
          {/* error body   */}
          <p className="mt-4 pt-3 border-t text-lg ">Error body :</p>
          <div className="bg-gray-100 w-[98%]  mb-2 p-3">
            {` '{
  error: string,          // error message e.g. "No credits"
  errorCode?: string,     // optional: any of ["NO_TN_FOUND", "NO_CREDITS", "INVALID_APIKEY", "DOUBLE_CHECK_FAILED"]
}'`}
          </div>
        </>
        <p className="mt-14 mb-4 text-[13px]">
          The API is rate-limited to 5 requests per second (burst: 10). You will
          receive Notification Emails to User123@gmail.com when credits are
          running low when using the API (when 100,50,10 credits left). Contact
          success@tracktaco.com for any questions.
        </p>
      </div>
    </div>
  );
}

export default page;
