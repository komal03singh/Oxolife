export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 9;

  // Sample product database
  const products = [
    {
      id: 1,
      img: "https://www.oxygentimes.com/storage/productlargeimages/everflo164674135016592471721659604289.jpg",
      name: "Philips Everflo 5 Liter Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 43700,
    },
    {
      id: 2,
      img: "https://www.oxygentimes.com/storage/productlargeimages/o1031664563086.jpg",
      name: "Oxymed 10 Litre Oxygen Concentrator (Dual Flow)",
      type: "oxygen-concentrators",
      price: 53500,
      discountPrice: 50000,
    },
    {
      id: 3,
      img: "https://www.oxygentimes.com/storage/productlargeimages/sequal-eclipse-51638160122.jpg",
      name: "SeQual Eclipse 5 Portable Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 299000,
    },
    {
      id: 4,
      img: "https://www.oxygentimes.com/storage/productlargeimages/sequal-eclipse-51638160122.jpg",
      name: "AirSep Newlife Intensity 10",
      type: "oxygen-concentrators",
      price: 174999,
    },
    {
      id: 5,
      img: "https://www.oxygentimes.com/storage/productlargeimages/image--0011636562156.jpg",
      name: "Caire Freestyle Comfort 5",
      type: "oxygen-concentrators",
      price: 259000,
    },
    {
      id: 6,
      img: "https://www.oxygentimes.com/storage/productlargeimages/inogen-g51659783511.jpg",
      name: "Inogen One G5 Portable Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 224950,
    },
    {
      id: 7,
      img: "https://www.oxygentimes.com/storage/productlargeimages/cover1636559191.jpg",
      name: "Philips SimplyGo Portable Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 215000,
    },
    {
      id: 8,
      img: "https://www.oxygentimes.com/storage/productlargeimages/Image1728386234.jpg",
      name: "Blureha 5L Oxygen Concentrator",
      type: "oxygen-concentrators",
      price: 48000,
      discountPrice: 47500,
    },
    {
      id: 9,
      img: "https://www.oxygentimes.com/storage/productlargeimages/216915154441706104161.jpg",
      name: "Oxymed AirSmart Bi-Level Auto",
      type: "cpap",
      price: 38250,
    },
    {
      id: 10,
      img: "https://www.oxygentimes.com/storage/productlargeimages/sleep-apnea-airsense-11-airsense-11-cpap-front-view1733301068.jpg",
      name: "Resmed Airsense 11 Autoset CPAP Machine",
      type: "cpap",
      price: 67800,
    },
    {
      id: 11,
      img: "https://www.oxygentimes.com/storage/productlargeimages/philips-respironics-dreamstation-auto-bipap1662098019.jpg",
      name: "Philips Dreamstation Auto BiPAP Machine",
      type: "cpap",
      price: 67999,
      discountPrice: 67000,
    },
    {
      id: 12,
      img: "https://www.oxygentimes.com/storage/productlargeimages/BPL-BiPAP-Machine-LifePAP-25S216482003771659945996.jpg",
      name: "BPL LifePAP 25STA BiPAP Machine with Auto-EPAP",
      type: "cpap",
      price: 73000,
    },
    {
      id: 13,
      img: "https://www.oxygentimes.com/storage/productlargeimages/bipap_vt2001658133756.jpg",
      name: "Deckmount VT 200 (VAPS) BiPAP Machine",
      type: "cpap",
      price: 28700,
    },
    {
      id: 14,
      img: "https://www.oxygentimes.com/storage/productlargeimages/Breas-Z2-Auto-CPAP1648115848.jpg",
      name: "Breas Z2 Auto Travel CPAP",
      type: "cpap",
      price: 65299,
      discountPrice: 60000,
    },
    {
      id: 15,
      img: "https://www.oxygentimes.com/storage/productlargeimages/G3_30VT_(2)1657617282.jpg",
      name: "BMC G3 B30VT BiPAP Machine",
      type: "cpap",
      price: 41400,
    },
    {
      id: 16,
      img: "https://www.oxygentimes.com/storage/productlargeimages/ResPro-ST25A-BIPAP-with-Humidifier-&-Mask1648199586.jpg",
      name: "ResPro ST25A BiPAP Machine",
      type: "cpap",
      price: 57500,
    },
    {
      id: 17,
      img: "https://www.oxygentimes.com/storage/productlargeimages/Power-Wheelchair-with-Small-Wheels-and-Electromagnetic-Brakes-(WC-105E)---Evox1656566857.jpg",
      name: "Evox WC-105E Electric Wheelchair",
      type: "wheelchairs",
      price: 58998,
    },
    {
      id: 18,
      img: "https://www.oxygentimes.com/storage/productlargeimages/Tetra-EX-Power-Wheelchair---Ostrich-Mobility1656584716.jpg",
      name: "Ostrich Mobility Tetra EX Power Wheelchair",
      type: "wheelchairs",
      price: 169999,
    },
    {
      id: 19,
      img: "https://www.oxygentimes.com/storage/productlargeimages/mhl_10071710247128.jpg",
      name: "Hero Mediva Electric Wheelchair (MHL-1007)",
      type: "wheelchairs",
      price: 52000,
      discountPrice: 50000,
    },
    {
      id: 20,
      img: "https://www.oxygentimes.com/storage/productlargeimages/WhatsApp_Image_2022-08-17_at_71661431083.jpeg",
      name: "SimplyMove Rejoy Basic Powder Coated Wheelchair",
      type: "wheelchairs",
      price: 22006,
    },
    {
      id: 21,
      img: "https://www.oxygentimes.com/storage/productlargeimages/4011657268818.jpg",
      name: "Kosmocare Rider Automatic Reclining Electric Wheelchair",
      type: "wheelchairs",
      price: 107499,
    },
    {
      id: 22,
      img: "https://www.oxygentimes.com/storage/productlargeimages/SP_1001657268396.jpg",
      name: "Karma SP 100 Power Wheelchair",
      type: "wheelchairs",
      price: 94998,
    },
  ];

  const filtered = type
    ? products.filter((p) => p.type === type.toLowerCase())
    : products;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginated = filtered.slice(startIndex, endIndex);

  return Response.json({
    data: paginated,
    total: products.length,
    page,
    totalPages: Math.ceil(filtered.length / limit),
  });
}
