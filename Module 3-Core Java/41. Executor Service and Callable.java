import java.util.concurrent.*;

public class ExecutorServiceCallable {

    public static void main(String[] args)
            throws Exception {

        ExecutorService service =
                Executors.newFixedThreadPool(3);

        Callable<Integer> task = () -> 10 + 20;

        Future<Integer> future =
                service.submit(task);

        System.out.println("Result = "
                + future.get());

        service.shutdown();
    }
}
