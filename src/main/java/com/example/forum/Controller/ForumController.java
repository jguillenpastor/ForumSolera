package com.example.forum.Controller;

import com.example.forum.Service.ForumService;
import com.example.forum.models.Forum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/forum")
@CrossOrigin("*")
public class ForumController {
    @Autowired
    private ForumService forumService;

    @PostMapping("/post")
    public String post(@RequestBody Forum forum){
        forumService.postOnForum(forum);
        return "New post added";
    }

    @GetMapping("/getAll")
    public List<Forum> getAllPosts(){
        return forumService.getAllPosts();
    }

   /* @GetMapping(path="{thread}")
    public List<Forum> findByThread(@PathVariable("thread") String thread){

        List<Forum> forums = forumService.getAllPosts()
                .stream()
                .filter(element -> element.getThread().equals(thread))
                .collect(Collectors.toList());

        return forums;
    }*/

    @GetMapping(path="{thread}")
    public List<Forum> findByThread(@PathVariable("thread") String thread){

        return  forumService.findByThread(thread);
    }

    @GetMapping("/banned")
    public List<String> getBannedWords(){
        List<String> list = Arrays.asList("caca", "culo","pedo");
        return  list;
    }

}
