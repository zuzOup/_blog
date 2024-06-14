function day(date) {
  const startDate = new Date("2022-10-19");
  const endDate = new Date(date);

  const diff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  return `Den ${diff}.`;
}

function src(url, size) {
  let id;
  let index;

  const extractId = (toBeSplit) => {
    for (let i = 0; i < toBeSplit.length; i++) {
      if (toBeSplit[i] === "/") index = i;
    }

    return (id = toBeSplit.slice(index + 1));
  };

  if (url.includes("https://drive.google.com/thumbnail?id=")) {
    const arr = url.split("&sz=w");
    arr.pop();
    return arr + "&sz=w" + size;
  } else if (!url.includes("view?usp=sharing")) {
    id = extractId(url);
  } else {
    const splitted = url.split("/");
    splitted.pop();
    const joined = splitted.join("/");

    id = extractId(joined);
  }

  const newUrl = "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + size;

  return newUrl;
}

function date(date) {
  const format = date
    .split("-")
    .reverse()
    .map((x) => {
      if (x[0] === "0") {
        return x[1];
      } else {
        return x;
      }
    })
    .join(".");

  return format;
}

function title(title) {
  if (!title.includes("✮")) return title;
  const middle = title.split("✮")[1];
  return "✮" + middle + "✮";
}

function titleVol(title) {
  if (!title.includes("🏐") && !title.includes("✮")) {
    return title;
  } else if (title.includes("🏐")) {
    return `<span>🏐</span> ${title.split("🏐")[1]} <span>🏐</span>`;
  } else if (title.includes("✮")) {
    return `<span>${title.split("✮")[0]}✮</span> ${title.split("✮")[1]} <span>✮${
      title.split("✮")[2]
    }</span>`;
  }
}

function forecast(res) {
  const wmo = res.hourly.weather_code.slice(10, 21);
  let wmoCount = {
    1: 0,
    2: 0,
    3: 0,
    50: 0,
    60: 0,
    70: 0,
  };

  let wmoRemade = [];

  wmo.forEach((x) => {
    if (x <= 1) {
      wmoRemade.push(1);
    } else if (x > 1 && x < 4) {
      wmoRemade.push(x);
    } else if (x >= 50 && x < 60) {
      wmoRemade.push(50);
    } else if (x >= 60 && x < 70) {
      wmoRemade.push(60);
    } else if (x >= 70) {
      wmoRemade.push(70);
    }
  });

  wmoRemade.forEach((x) => {
    wmoCount[x]++;
  });

  if (wmo.every((x) => x < 4)) {
    const whatWeather = wmo.reduce((a, c) => a + c, 0) / wmo.length;
    if (Math.round(whatWeather) === 3) {
      return 3;
    } else if (
      Math.round(whatWeather) === 2 ||
      (Math.round(whatWeather) <= 1 && wmoCount[1] < 5)
    ) {
      return 2;
    } else if (Math.round(whatWeather) <= 1) {
      return 1;
    }
  } else if (
    wmoCount[50] < 3 &&
    wmoCount[60] < 3 &&
    wmoCount[70] < 3 &&
    wmoCount[50] + wmoCount[60] + wmoCount[70] < 3
  ) {
    return 3;
  } else if (wmoCount[70] >= 3) {
    return 6;
  } else if (wmoCount[50] >= 3) {
    return 4;
  } else if (wmoCount[60] >= 3) {
    return 5;
  }
}

function char(char) {
  let mobile = false;

  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  if (
    toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    })
  ) {
    mobile = true;
  }

  if (mobile) {
    if (char === "⮵") {
      return "⤴";
    } else if (char === "🢚") {
      return "→";
    } else if (char === "🢘") {
      return "←";
    }
  } else return char;
}

export { day, src, date, title, titleVol, forecast, char };
