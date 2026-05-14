var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "圖書館門口",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.01781454192235543,
        "pitch": -0.39167162786288756,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.031404428387533656,
          "pitch": -0.02763429607851542,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.07254372239214035,
          "pitch": -0.47589954719344085,
          "title": "東湖圖書館",
          "text": "位於內湖區五分街，是台北市立圖書館的其中之一。"
        }
      ]
    },
    {
      "id": "1-",
      "name": "圖書館一樓",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5963870585962567,
          "pitch": -0.10951989840247478,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": -1.584841184040755,
          "pitch": 0.09455195464575361,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9437018788408906,
          "pitch": 0.19845700393556598,
          "title": "服務台",
          "text": "在圖書館中的一些疑難雜症(?)可以向工作人員尋求協助"
        },
        {
          "yaw": 0.06346613982612404,
          "pitch": 0.2698221917248329,
          "title": "廁所",
          "text": "廁所"
        },
        {
          "yaw": -0.9261370555121875,
          "pitch": 0.06761489266986942,
          "title": "資訊查詢區",
          "text": "可以使用借閱證來登記使用電腦查詢資料"
        },
        {
          "yaw": -1.1156924764423763,
          "pitch": -0.07405629705155548,
          "title": "預約書區",
          "text": "如果有預約書籍，可以在這裡按照編號拿書"
        },
        {
          "yaw": -1.4510558955324129,
          "pitch": 0.22487263165792015,
          "title": "借書機",
          "text": "如果要借閱書籍，需要用借書機或者去服務台借書。"
        },
        {
          "yaw": 0.5983761961333478,
          "pitch": 0.14780825962041355,
          "title": "B1自修室",
          "text": "很多會考或學測的應屆考生都在這裡認真讀書"
        }
      ]
    },
    {
      "id": "2-",
      "name": "圖書館一樓內部",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7839971602543292,
          "pitch": 0.16253492464563735,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5454283145305254,
          "pitch": 0.08966610954531973,
          "title": "參考資料區",
          "text": "參考資料區"
        },
        {
          "yaw": -2.5274414984897575,
          "pitch": 0.06887746240786363,
          "title": "期刊區",
          "text": "期刊區"
        },
        {
          "yaw": -0.2436186393151445,
          "pitch": 0.42104658131037986,
          "title": "報紙閱讀區",
          "text": "報紙閱讀區"
        }
      ]
    },
    {
      "id": "3-",
      "name": "圖書館二樓",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5675762286511308,
          "pitch": 0.2481205888850333,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": 2.3513773001846054,
          "pitch": -0.037413264117484246,
          "rotation": 0,
          "target": "5-"
        },
        {
          "yaw": 2.3958416696666696,
          "pitch": 0.19904545604959267,
          "rotation": 3.141592653589793,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.657305424213245,
          "pitch": 0.13956521910193587,
          "title": "廁所",
          "text": "「親子」廁所"
        },
        {
          "yaw": 2.86243922704249,
          "pitch": 0.2580665659903687,
          "title": "主題書展區",
          "text": "主題書展區"
        }
      ]
    },
    {
      "id": "4-",
      "name": "圖書館二樓內部",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0167235578170946,
          "pitch": 0.20226724882661706,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0892276918835293,
          "pitch": 0.07147408238312458,
          "title": "讀書區",
          "text": "有時候這裡會有志工來與小朋友講故事"
        },
        {
          "yaw": 2.221483639917812,
          "pitch": 0.2913950923753923,
          "title": "自修區",
          "text": "自修區"
        }
      ]
    },
    {
      "id": "5-",
      "name": "圖書館三樓",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 1.327142283290062,
        "pitch": 0.14417233581668043,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.194428487532562,
          "pitch": -0.12426968857991483,
          "rotation": 0,
          "target": "6-"
        },
        {
          "yaw": -2.202450085140816,
          "pitch": 0.14283509289235496,
          "rotation": 3.141592653589793,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7669307826213334,
          "pitch": 0.14367474818313397,
          "title": "廁所",
          "text": "廁所"
        },
        {
          "yaw": -1.4217601830168665,
          "pitch": 0.2620003366804262,
          "title": "主題書展區",
          "text": "主題書展區"
        },
        {
          "yaw": 2.1814112091220226,
          "pitch": 0.3513236920761287,
          "title": "自修區",
          "text": "自修區"
        },
        {
          "yaw": 1.1570039396191643,
          "pitch": 0.0839868902932146,
          "title": "一般圖書區",
          "text": "一般圖書區"
        }
      ]
    },
    {
      "id": "6-",
      "name": "圖書館四樓門口",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0031260167391611304,
          "pitch": 0.5249660308817674,
          "rotation": 2.356194490192345,
          "target": "5-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9565958514450674,
          "pitch": 0.038743030236346954,
          "title": "視聽室",
          "text": "有時內部會辦活動，沒有辦活動時會關起來(像這樣)。"
        }
      ]
    }
  ],
  "name": "inside library",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
