function addUser()
{
  user_name = documarnt.getElementById("user_name").value;
  localStorage.setItem("user_name",user_name);
  window.location = "kwitter_room.html";
}