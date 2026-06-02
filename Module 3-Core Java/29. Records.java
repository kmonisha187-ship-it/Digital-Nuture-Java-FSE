import java.util.List;

record Person(String name, int age) {}

public class RecordsExample {
    public static void main(String[] args) {

        List<Person> people = List.of(
                new Person("John", 20),
                new Person("Mary", 25),
                new Person("Sam", 17)
        );

        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(System.out::println);
    }
}
