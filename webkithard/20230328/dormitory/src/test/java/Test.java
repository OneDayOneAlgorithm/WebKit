import org.junit.jupiter.api.Assertions;

public class Test {


    @org.junit.jupiter.api.Test
    void basicTest(){
        //given
        int a = 10;

        //when
        a = 20;

        //then
        Assertions.assertEquals(10,a);
    }
}
