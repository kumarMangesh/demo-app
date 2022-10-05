import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import MediaCard from "./CollectionItems";
import PaginationRounded from '../Pagination/Pagination';
import FavouritesMediaCard from './FavouritesPage';


export default function ListItems({ SHOP_DATA, handleAddFavourites, handleRemovefavourite }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [newPost, setNewPost] = useState([]);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    setPosts(SHOP_DATA);
  }, [SHOP_DATA]);

  useEffect(() => {
      // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  setNewPost(currentPosts)
  }, [posts,currentPage, postsPerPage])

  if (window.location.pathname === "/favourite") {
    return (
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {newPost.filter(item => item.favourite).map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <FavouritesMediaCard key={item.id} data = {item} handleRemovefavourite={handleRemovefavourite} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <div style={{
        margin: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <PaginationRounded
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      </div>
    )
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {newPost.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <MediaCard key={item.id} data = {item} handleAddFavourites={handleAddFavourites}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <div style={{
        margin: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <PaginationRounded
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

