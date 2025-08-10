import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
  //get blog details
  const getBlogDetails = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogDetails();
  }, [id]);
  //input Change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success('Blog Updated');
        navigate('/my-blogs');
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blog);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={'50%'}
          border={3}
          borderRadius={10}
          padding={3}
          margin={'auto'}
          boxShadow={'10px 10px 20px #ccc'}
          display={'flex'}
          flexDirection={'column'}
          marginTop={'30px'}
        >
          <Typography
            variant="h2"
            textAlign={'center'}
            fontWeight={'bold'}
            padding={3}
            color="gray"
          >
            Update Blog
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'Bold' }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'Bold' }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'Bold' }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="warning" variant="contained">
            Update
          </Button>
        </Box>
      </form>
    </>
  );
};

export default BlogDetails;
