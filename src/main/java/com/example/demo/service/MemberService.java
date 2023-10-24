package com.example.demo.service;

import com.example.demo.domain.About;
import com.example.demo.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public String join(About about){
        validateDuplicateMember(about);
        memberRepository.save(about);
        return about.getId();
    }

    public List<About> findAll(){
        return memberRepository.findAll();
    }
    //익셉션...
    public boolean login(About about){
        About findUser = memberRepository.findLogin(about.getId());

        if(findUser == null){
            throw new IllegalStateException("해당 아이디가 존재하지 않습니다.");
        }

        if(!findUser.getPassword().equals(about.getPassword())){
            throw new IllegalStateException("패스워드가 맞지 않습니다..");
        }
        return true;
    }

    public void updateMember(About about){
        About findUser = memberRepository.findLogin(about.getId());

        if(findUser == null){
            throw new IllegalStateException("해당 아이디가 존재하지 않습니다.");
        }

        if(!findUser.getPassword().equals(about.getPassword())){
            throw new IllegalStateException("패스워드가 맞지 않습니다..");
        }

        memberRepository.update(about);
    }

    public void deleteMember(About about){
        About findUser = memberRepository.findLogin(about.getId());

        if(findUser == null){
            throw new IllegalStateException("해당 아이디가 존재하지 않습니다.");
        }

        if(!findUser.getPassword().equals(about.getPassword())){
            throw new IllegalStateException("패스워드가 맞지 않습니다..");
        }
        memberRepository.delete(about);
    }
    public void updatePassword(About about){
        About findUser = memberRepository.findLogin(about.getId());

        if(findUser == null){
            throw new IllegalStateException("해당 아이디가 존재하지 않습니다.");
        }

        if(!findUser.getPassword().equals(about.getPassword())){
            throw new IllegalStateException("패스워드가 맞지 않습니다..");
        }
        memberRepository.updatePassword(about);
    }

    //Optional 겁나 까다로움...
    public Optional<About> findOne(About about){
        Optional<About> findUser =  memberRepository.findById(about.getId());
        String userPass;
        if(findUser.isPresent()){
            userPass = findUser.get().getPassword();

            if(!userPass.equals(about.getPassword())){
                throw new IllegalStateException("패스워드가 맞지 않습니다..");
            }
        }

        return  findUser;
    }
    public Optional<About> findByInfo(About about){
        Optional<About> findUser =  memberRepository.findById(about.getId());

        return  findUser;
    }
    private void validateDuplicateMember(About about) {
        memberRepository.findById(about.getId())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");

                });
    }
}
