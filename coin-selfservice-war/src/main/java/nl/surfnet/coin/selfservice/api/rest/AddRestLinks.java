package nl.surfnet.coin.selfservice.api.rest;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import nl.surfnet.coin.csa.model.Service;
import nl.surfnet.coin.selfservice.domain.CoinUser;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import static java.lang.String.format;

/**
* Created by lars on 09/09/14.
*/
public class AddRestLinks {

  private Map<Class<?>, Consumer<JsonElement>> mapping = new HashMap();

  private static Consumer<JsonElement> NOOP = jsonObject -> {
  };

  private static Consumer<JsonObject> AddLinksToInstitutionIdentityProvider = idp -> {
    JsonObject links = new JsonObject();
    links.addProperty("switch", format("/idp/current/%s", idp.getAsJsonPrimitive("id").getAsString()));
    idp.add("_links", links);
  };

  private final JsonElement json;

  public AddRestLinks(JsonElement json) {
    this.json = json;

    mapping.put(CoinUser.class, coinUserJsonElement -> {
      JsonObject links = new JsonObject();
      links.addProperty("self", "/users/me");
      JsonObject coinUser = coinUserJsonElement.getAsJsonObject();
      coinUser.add("_links", links);
      coinUser.getAsJsonArray("institutionIdps").forEach(idp -> AddLinksToInstitutionIdentityProvider.accept(idp.getAsJsonObject()));
    });
    mapping.put(Service.class, serviceJsonElement -> {
      JsonObject links = new JsonObject();
      JsonObject serviceAsJsonObject = serviceJsonElement.getAsJsonObject();
      links.addProperty("self", format("/services/id/%s", serviceAsJsonObject.getAsJsonPrimitive("id").getAsLong()));
      serviceAsJsonObject.add("_links", links);
    });
  }

  public static AddRestLinks to(JsonElement json) {
    return new AddRestLinks(json);
  }

  public void forClass(Class<?> aClass) {
    JsonElement payload = json.getAsJsonObject().get("payload");
    if(payload.isJsonObject()) {
      mapping.getOrDefault(aClass, NOOP).accept(payload);
    } else {
      payload.getAsJsonArray().forEach(jsonElement -> mapping.getOrDefault(aClass, NOOP).accept(jsonElement));
    }
  }
}
