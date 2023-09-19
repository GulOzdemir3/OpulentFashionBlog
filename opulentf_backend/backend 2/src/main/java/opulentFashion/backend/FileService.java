package opulentFashion.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
public class FileService {

    private final ResourceLoader resourceLoader;

    @Autowired
    public FileService(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    public List<String> getAllJsonFiles() throws IOException {
        List<String> jsonFilesData = new ArrayList<>();

        // Listing the JSON file paths in the resources folder
        String[] fileNames = {"chanelChartData.json", "togoChartData.json"};

        for (String fileName : fileNames) {
            Resource resource = resourceLoader.getResource("classpath:" + fileName);

            // Read JSON file content into a string
            String jsonData = new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);

            jsonFilesData.add(jsonData);
        }

        return jsonFilesData;
    }
}

//    String[] fileNames = {"chanelChartData.json", "togoChartData.json"};