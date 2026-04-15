function fetchUser(id, callback) {
    console.log("Fetching user from database...");

    setTimeout(() => {
        const user = { id, name: "Abhishek" };
        callback(user); // callback runs AFTER data is fetched
    }, 2000);
}

function processUser(user) {
    console.log("Processing user:", user.id);
}

fetchUser(101, processUser);
