const paginateFollowers = (followers) => {
  const usersPerPage = 12;
  const totalPages = Math.ceil(followers.length / usersPerPage);

  return Array.from({ length: totalPages }, (_, index) => {
    const start = usersPerPage * index;
    return followers.slice(start, start + usersPerPage);
  });
};

export default paginateFollowers;
