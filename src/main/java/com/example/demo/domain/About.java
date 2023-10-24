package com.example.demo.domain;


import jdk.jfr.Name;

import javax.persistence.*;

@Entity
@Table(name = "member")
public class About {

    //@GeneratedValue(strategy = GenerationType.IDENTITY) 아이디를 자동생성 안할거라 주석
    @Id
    private String id;
    private String name;
    private String password;
    private String email;

    @Transient //DB에는 없는 컬럼이지만 엔티티에는 필요한 모델?VO? 설정
    private String chgpassword;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getChgpassword() {
        return chgpassword;
    }

    public void setChgpassword(String chgpassword) {
        this.chgpassword = chgpassword;
    }
}
