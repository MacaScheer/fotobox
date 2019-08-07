export const fetchUsers = () => {
    return $.ajax({
        method: "GET",
        url: `api/users`
    });
};

export const fetchUser = userId => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}`
    });
}; 
 
