package com.example.forum.Service;

import com.example.forum.Repository.ForumRepository;
import com.example.forum.models.Forum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForumServiceImp implements ForumService {
    @Autowired
    private ForumRepository forumRepository;

    @Override
    public Forum postOnForum(Forum forum){
        return forumRepository.save(forum);
    }

    @Override
    public List<Forum> getAllPosts(){
        return forumRepository.findAll();
    }

    @Override
    public List<Forum> findByThread(String thread) {
        return forumRepository.findByThread(thread);
    }


}
