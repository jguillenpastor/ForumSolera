package com.example.forum.Service;

import com.example.forum.models.Forum;

import java.util.List;

public interface ForumService {
    public Forum postOnForum(Forum forum);

    public List<Forum> getAllPosts();

    public List<Forum> findByThread(String thread);



}
