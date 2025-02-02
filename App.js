import React from "react";
import ReactDOM from "react-dom/client";

/*
- Header
    -Logo
    -Nav Items
-Body
    -Search
    -Restaurent Container
        -Img
        -Name of Res, Star Rating, Cuisines, etc
-Footer
    -Container
    -Links
    -Address
    -Contact
*/

const Title = () => {
    return (
        <div className="header">
            <img className="logo" src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-food-logo-png-image_8466881.png" />
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
            
        </div>
    )
};

const resList = [
    {
      "info": {
        "id": "234875",
        "name": "Adil Hotel",
        "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
        "locality": "Rautha Wada",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Tandoor"
        ],
        "avgRating": 4.3,
        "parentId": "27123",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.2K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 10.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "10.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-02 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "151518",
        "name": "Bakery World",
        "cloudinaryImageId": "mt2aggiscfl3yviatwng",
        "locality": "Parasia Road",
        "areaName": "Parasia Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Ice Cream",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "40363",
        "avgRatingString": "4.3",
        "totalRatingsString": "254",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 11.7,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "11.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-02 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "151656",
        "name": "Dev International",
        "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
        "locality": "khajri road",
        "areaName": "Mohan Nagar",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Fast Food",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "71556",
        "avgRatingString": "4.3",
        "totalRatingsString": "444",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 11.7,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "11.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-02 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹349",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "150591",
        "name": "Satkar Restaurant",
        "cloudinaryImageId": "rvxp5xbniat84r6efku2",
        "locality": "Sinchai Colony",
        "areaName": "Satkar Chowk",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Indian",
          "Salads",
          "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "21553",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.4K+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 13,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "13.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-02 22:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "385824",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
        "locality": "Sinchai Colony",
        "areaName": "Mohan Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.7",
        "totalRatingsString": "296",
        "sla": {
          "deliveryTime": 51,
          "lastMileTravel": 12,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "12.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-02 22:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
        "type": "WEBLINK"
      }
    },
    {
          "info": {
            "id": "1003414",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
            "locality": "Chhindwara",
            "areaName": "Parasia Road",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.8,
            "parentId": "721",
            "avgRatingString": "3.8",
            "totalRatingsString": "19",
            "sla": {
              "deliveryTime": 61,
              "lastMileTravel": 12.8,
              "serviceability": "SERVICEABLE",
              "slaString": "60-65 mins",
              "lastMileTravelString": "12.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-02 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "769851",
            "name": "Healthy Bites",
            "cloudinaryImageId": "4dfbe240cf1a2be01e6f2805c75c4279",
            "locality": "Collectrate Road",
            "areaName": "Chhindwara City",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Salads"
            ],
            "veg": true,
            "parentId": "3143",
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 49,
              "lastMileTravel": 11.3,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "11.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-02 22:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "5.0",
                "ratingCount": "1"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
          },
          "analytics": {
            "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/healthy-bites-collectrate-road-chhindwara-city-rest769851",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "337899",
            "name": "The Paratha House",
            "cloudinaryImageId": "jhjyc3xjdbkqr9wbzsj7",
            "locality": "Ganesh Chowk",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "North Indian"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "3035",
            "avgRatingString": "4.2",
            "totalRatingsString": "30",
            "sla": {
              "deliveryTime": 44,
              "lastMileTravel": 10.3,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "10.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-02 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹50 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/the-paratha-house-ganesh-chowk-chhindwara-locality-rest337899",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "382152",
            "name": "Shriji Namkeen",
            "cloudinaryImageId": "wa8ek94fp9d97ru1tcyn",
            "locality": "Palika Market",
            "areaName": "Chhindwara City",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Snacks",
              "Beverages",
              "Desserts"
            ],
            "avgRating": 3.8,
            "parentId": "187168",
            "avgRatingString": "3.8",
            "totalRatingsString": "48",
            "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 10.7,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "10.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-02 22:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/shriji-namkeen-palika-market-chhindwara-city-rest382152",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "509851",
            "name": "Magic Momo",
            "cloudinaryImageId": "dh0qsuqritnmbncwrni3",
            "locality": "Parasia Road",
            "areaName": "Prasia Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Momos",
              "Chinese"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "129345",
            "avgRatingString": "4.2",
            "totalRatingsString": "48",
            "sla": {
              "deliveryTime": 49,
              "lastMileTravel": 12.3,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "12.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-02 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/magic-momo-parasia-road-prasia-road-rest509851",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "774546",
            "name": "Shree Naivedyam",
            "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
            "locality": "Khajri Road",
            "areaName": "Chhindwara City",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "South Indian",
              "Pizzas",
              "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "428968",
            "avgRatingString": "4.3",
            "totalRatingsString": "102",
            "sla": {
              "deliveryTime": 47,
              "lastMileTravel": 11.7,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "11.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-02-02 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹40 OFF",
              "subHeader": "ABOVE ₹399",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-1d37b9b2-eb64-419d-9668-f900cb922fb6"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
   
  ];

const ResCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name, 
        cuisines,
        avgRating,
        costForTwo, 
        deliveryTime
    } = resData?.info;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img 
            className="res-logo" alt="res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>
    );
};



const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
                {resList.map((restaurent) => (
                    <ResCard key={restaurent.info.id} resData={restaurent} />
                   ))}
                    
           

            </div>

        </div>

    );
};

const AppLayout = () => {
    return (
       
        <div className="app">
             <Title />
             <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
