package com.example.forum.Repository;

import com.example.forum.models.Forum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ForumRepository extends JpaRepository<Forum,Integer> {
    //select * where thread = thread;
    public List<Forum> findByThread(String thread);
}
