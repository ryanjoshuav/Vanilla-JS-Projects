const dictionary = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
};

// Filtering by values
const filteredValues = Object.entries(dictionary).filter(
    ([, value]) => value === "value1" || value === "value3"
);

// Filtering by keys
const filteredKeys = Object.entries(dictionary).filter(
    ([key]) => key === "key1" || key === "key3"
);

console.log("Filtered Values:", Object.fromEntries(filteredValues));
console.log("Filtered Keys:", Object.fromEntries(filteredKeys));
