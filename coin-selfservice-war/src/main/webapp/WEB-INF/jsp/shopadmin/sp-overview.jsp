<%@ taglib prefix="tags" tagdir="/WEB-INF/tags" %>
<%@ include file="../include.jsp" %>
<%--
  Copyright 2012 SURFnet bv, The Netherlands

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  --%>

<%--@elvariable id="sps" type="java.util.List<nl.surfnet.coin.selfservice.domain.ServiceProvider>"--%>
<spring:message var="title" code="jsp.allsp.title"/>

<jsp:include page="../header.jsp">
  <jsp:param name="title" value="${title}"/>
</jsp:include>

<section>

  <h2>${title}</h2>

  <div class="content">

    <table id="sp_overview_table" class="table table-bordered table-striped table-above-pagination">
      <thead>
      <tr>
        <th><spring:message code="jsp.sp_overview.name"/></th>
        <th><spring:message code="jsp.sp_overview.lmngid"/></th>
        <th><spring:message code="jsp.sp_overview.detail"/></th>
      </tr>
      </thead>
      <tbody>
      <c:forEach items="${bindings}" var="binding" varStatus="status">
        <c:if test="${not empty binding.serviceProvider.id}">
          <spring:url value="/idpadmin/sp/detail.shtml" var="detailUrl" htmlEscape="true">
            <spring:param name="spEntityId" value="${binding.serviceProvider.id}" />
          </spring:url>
          <tr>
            <td title="${binding.serviceProvider.id} - ${fn:substring(binding.serviceProvider.descriptions[locale.language], 0, 40)}"><a href="${detailUrl}">
            		<tags:providername provider="${binding.serviceProvider}"/>
            	</a></td>
            <td class="text-overflow">
			  <form:form method="post" action="save-splmng.shtml" >
            	<input value="${binding.lmngIdentifier}" class="lmngIdentifier" type="text" size="40" name="lmngIdentifier"/>
            	<input value="${binding.serviceProvider.id}" type="hidden" name="spIdentifier"/>
            	<c:set var="confirmationMessage" scope="request"><spring:message code="jsp.sp_overview.confirm" /></c:set>
            	<c:set var="clearButtonTitle" scope="request"><spring:message code="jsp.sp_overview.clearbutton" /></c:set>
            	<c:set var="submitButtonTitle" scope="request"><spring:message code="jsp.sp_overview.submitbutton" /></c:set>
            	<button type="submit" value="clear" title="${clearButtonTitle}" name="submit" onclick="return confirm('${confirmationMessage}');">C</button>
            	<button type="submit" value="submit" title="${submitButtonTitle}" name="submit">V</button>
			  </form:form>
            </td>
            <td class="center">
              <%-- Add detail/binding button --%>
            </td>
          </tr>
        </c:if>
      </c:forEach>

      </tbody>
    </table>

  </div>
</section>

<jsp:include page="../footer.jsp">
  <jsp:param name="datatables" value="true"/>
</jsp:include>