import java.util.*;

public class CollatzSolver {
    
    static class Result {
        int number;
        int chainLength;
        
        Result(int number, int chainLength) {
            this.number = number;
            this.chainLength = chainLength;
        }
    }
    
    public static Result find(int lim) {
        Map<Long, Integer> cache = new HashMap<>();
        // I hate dp so much
        int max = 0;
        int number = 0;
        
        for (int i = 1; i < lim; i++) {
            int chain = len(i, cache);
            
            if (chain > max) {
                max = chain;
                number = i;
            }
        }
        
        return new Result(number, max);
    }
    
    private static int len(long n, Map<Long, Integer> cache) {
        if (n == 1) return 1;
        if (cache.containsKey(n)) return cache.get(n);
        
        long orig = n;
        int length = 0;
        
        while (n != 1 && !cache.containsKey(n)) {
            n = (n % 2 == 0) ? n / 2 : 3 * n + 1;
            length++;
        }
        
        int total = length + (n == 1 ? 1 : cache.get(n));
        cache.put(orig, total);
        
        return total;
    }
    
    
    public static void main(String[] args) {
      
        
        System.out.println("Finding the number under 1,000,000 with the longest Collatz chain...");
        long startTime = System.nanoTime();
        
        Result res = find(1000000);
        
        long endTime = System.nanoTime();
        double duration = (endTime - startTime) / 1_000_000.0;
        
        System.out.println("Execution Time: " + duration + " ms");

        System.out.println("Starting number: " + res.number);
        System.out.println("Chain length: " + res.chainLength);
       
      
}