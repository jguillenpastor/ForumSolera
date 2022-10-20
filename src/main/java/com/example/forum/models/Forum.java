package com.example.forum.models;

import javax.persistence.*;

@Entity
public class Forum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String thread;

    private String category;
    private String body;

    public Forum(int id, String thread, String category, String body) {
        this.id = id;
        this.thread = thread;
        this.category = category;
        this.body = body;
    }

    public Forum() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getThread() {
        return thread;
    }

    public void setThread(String thread) {
        this.thread = thread;
    }
}
