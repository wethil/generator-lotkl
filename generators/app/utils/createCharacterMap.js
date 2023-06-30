function createCharacterMap(baseString, targetString) {
  const characterMap = {};

  for (let i = 0; i < baseString.length; i++) {
    const baseChar = baseString[i];
    const targetChar = targetString[i];

    if (baseChar !== targetChar) {
      const escapedTarget = targetChar;
      characterMap[escapedTarget] = baseChar;
    }
  }

  return characterMap;
}

// // Example usage:
// const baseString = `QCConfig1{ "settings.json": "H4sIADVqHGQAA6vmUgACpYLk4tCiHCUrBaWMkpICK319QwM9Q0MjPSMTAz1TJR2IouT80rySokqQKhdXmGBKMogfllqUkpqnxFXLBQAdaLXSUQAAAA==", "settings.enc.json": "H4sIADVqHGQAA12QS5OaQBSF9/6KKbakqkNrM5CqWeCjCSDig0Zxx0AjyKOV5unU/PcYU6nEubt7Ft9X53yMXu4nFNe6Fn68fDy+R5Iw/jsRCMQ80r3sIIGd6yIWDLNxz6DGetytt7a1PVuFpZhD3dYp99ohgXuudlaaAsWZgs4D3Et8tzT8bmt6ZAEWqFqRzdub8O2fq+G0KoOCfvEFpd44+rrW8b5aSgtlKebXnQPkqupW0eSSPTEuAecdq6JnhlpYqX7cyMdLRizTcnGomlYc3Mg8Gkvs6ldtR9jkkGvr1dk79fGOFnMEhAf28w9d4OPnZYIwpJxbdDC+yox7+/x4RpsecjhFwa5fREaRDDvq6R1rG9HZt3bv9ZJPmkjXZ3giw+H/EpyGFa21v4JnvFjAIrO3Xdo3gIrygH0/vhBfi2bosl42rykTXXrI1MOkeidFE8N2l4wdDZbSVBkD1IrLSELlcX3C5+6+/3NHWtbVMOclqfJnq/K+4C0MNVJe1WBaOzfcMLCwA2YnJv5evV6H/SzFURTPyQwPP5GW6iejtYEL+NwocxkfTGfT3vycQO1Vl6aIOSzkMaSRzSAMepmi0wZ7JXJdNYi9Q2MryM+E0efoF0tAeAebAgAA"}`;
// const targetString = `QCConfig1¶ @settings.json@> @H4sIADVqHGQAA6vmUgACpYLk4tCiHCUrBaWMkpICK319QwM9Q0MjPSMTAz1TJR2IouT80rySokqQKhdXmGBKMogfllqUkpqnxFXLBQAdaLXSUQAAAA))@, @settings.enc.json@> @H4sIADVqHGQAA12QS5OaQBSF9&6KKbakqkNrM5CqWeCjCSDig0Zxx0AjyKOV5unU&PcYU6nEubt7Ft9X53yMXu4nFNe6Fn68fDy-R5Iw&jsRCMQ80r3sIIGd6yIWDLNxz6DGetytt7a1PVuFpZhD3dYp99ohgXuudlaaAsWZgs4D3Et8tzT8bmt6ZAEWqFqRzdub8O2fq-G0KoOCfvEFpd44-rrW8b5aSgtlKebXnQPkqupW0eSSPTEuAecdq6JnhlpYqX7cyMdLRizTcnGomlYc3Mg8Gkvs6ldtR9jkkGvr1dk79fGOFnMEhAf28w9d4OPnZYIwpJxbdDC-yox7-&x4RpsecjhFwa5fREaRDDvq6R1rG9HZt3bv9ZJPmkjXZ3giw-H&EpyGFa21v4JnvFjAIrO3Xdo3gIrygH0&vhBfi2bosl42rykTXXrI1MOkeidFE8N2l4wdDZbSVBkD1IrLSELlcX3C5-6-&3NHWtbVMOclqfJnq&K-4C0MNVJe1WBaOzfcMLCwA2YnJv5evV6H&SzFURTPyQwPP5GW6iejtYEL-NwocxkfTGfT3vycQO1Vl6aIOSzkMaSRzSAMepmi0wZ7JXJdNYi9Q2MryM-E0efoF0tAeAebAgAA@º`;

// const escapedMap = createCharacterMap(baseString, targetString);

// console.log("Character Map:");
// console.log(escapedMap);

// function convertStringWithMap(characterMap, targetString) {
//   let convertedString = "";

//   for (let i = 0; i < targetString.length; i++) {
//     const targetChar = targetString[i];
//     const escapedTarget = JSON.stringify(targetChar);
//     const baseChar = characterMap[escapedTarget]
//       ? characterMap[escapedTarget].slice(-1)
//       : targetChar;
//     convertedString += baseChar;
//   }

//   return convertedString;
// }

// console.log("Result Map:");

// const convString = convertStringWithMap(escapedMap, targetString);

// console.log(JSON.parse(convString.replace("QCConfig1", "")));

module.exports = {
  createCharacterMap
};
