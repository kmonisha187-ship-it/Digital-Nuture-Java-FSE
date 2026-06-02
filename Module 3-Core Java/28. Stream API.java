import java.util.Arrays;
import java.util.List;

public class StreamAPIExample {
    public static void main(String[] args) {

        List<Integer> nums = Arrays.asList(1,2,3,4,5,6,7,8);

        nums.stream()
            .filter(n -> n % 2 == 0)
            .forEach(System.out::println);
    }
}
