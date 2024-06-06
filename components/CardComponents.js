export const CardComponents = (user) => {
  return `
    <div class="card p-4 bg-white shadow-md rounded-lg" id="user-${user.id}">
      <h2 class="text-lg font-semibold">${user.name.firstname} ${user.name.lastname}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <div class="address mt-2">
        <h3 class="font-medium">Address</h3>
        <p>${user.address.number} ${user.address.street}</p>
        <p>${user.address.city}, ${user.address.zipcode}</p>
        <p><strong>Geo:</strong> ${user.address.geolocation.lat}, ${user.address.geolocation.long}</p>
      </div>
    </div>
  `;
};
