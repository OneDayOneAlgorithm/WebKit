package com.example.jpapractice.controller;

import com.example.jpapractice.application.BookAppService;
import com.example.jpapractice.controller.request.BookRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class BookController {
    private final BookAppService bookAppService;

    @PostMapping("/team/{teamId}/{memberId}")
    public String addMember(@PathVariable Long teamId, @PathVariable Long memberId){
        return bookAppService.addMember(teamId, memberId);
    }

    @PostMapping("/books")
    public String createBook(@RequestBody BookRequest.CreateBook request){
        return bookAppService.createBook(request);
    }

    @PutMapping("/books/{id}")
    public String updateBook(@PathVariable Long id,  @RequestBody BookRequest.CreateBook request){
        return bookAppService.updateBook(id, request);
    }

    @DeleteMapping("/books/{id}")
    public String deleteBook(@PathVariable Long id){
        return bookAppService.remove(id);
    }
}
