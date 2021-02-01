export const signup = user =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });

export const login = user =>
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user }
  });

export const logout = () =>
  $.ajax({
    url: "api/session",
    method: "DELETE"
  });
