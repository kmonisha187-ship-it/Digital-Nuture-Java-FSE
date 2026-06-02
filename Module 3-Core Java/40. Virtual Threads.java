public class VirtualThreads {

    public static void main(String[] args)
            throws InterruptedException {

        for (int i = 1; i <= 100; i++) {

            int num = i;

            Thread.startVirtualThread(() ->
                    System.out.println(
                            "Virtual Thread " + num));
        }

        Thread.sleep(1000);
    }
}
