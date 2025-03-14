function countStr(a) {
    // Validation: Ensure input is a non-empty string
    if (typeof a !== "string" || a.length === 0) {
        console.log("Invalid arguments");
        return;
    }

    let count = 1; // Counter for consecutive characters
    let str = "";  // Compressed string result

    // Loop through the string
    for (let i = 1; i < a.length; i++) { // Declare 'i' with 'let'
        if (a[i] === a[i - 1]) {
            count++; // Increment count if the same character repeats
        } else {
            str += a[i - 1] + count; // Append character and count to the result
            count = 1; // Reset count for the new character
        }
    }

    // Append the last character and its count
    str += a[a.length - 1] + count;

    // Use an if-else block to determine output
    let output;
    if (str.length < a.length) {
        output = str; // Use the compressed string if it's shorter
    } else {
        output = a; // Otherwise, use the original string
    }

    console.log(output); // Print the output
}

// Test cases
countStr("abccc");      // Output: "a1b1c3"
countStr("aabbbcccc");  // Output: "a2b3c4"
countStr("abc");        // Output: "abc"
countStr("");           // Output: "Invalid arguments"
countStr(null);         // Output: "Invalid arguments"
