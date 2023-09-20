export const filterData = (SearchTxt, restaurants) => {
    const data = restaurants.filter((e)=>  e.info.name.toLowerCase().includes(SearchTxt.toLowerCase()))
    console.log(data);
    return data;
  }

  export  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time (you can change this value)
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards at a time for smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card at a time for mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };